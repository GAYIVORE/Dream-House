// js/main.js

window.addEventListener('load', () => {
    const sceneEl = document.querySelector('a-scene');

    // 1. Setup the Remote Control to toggle the Bedroom Ceiling Lamp
    const remote = document.querySelector('#box-remote');
    const bedroomLight = document.querySelector('#bedroom-design a-light');

    if (remote && bedroomLight) {
        // We programmatically add the component you defined in controls.js
        remote.setAttribute('light-switch', {
            target: bedroomLight
        });
    }

    // 2. Optional: Global Scene Management
    sceneEl.addEventListener('loaded', () => {
        console.log("Dream Villa Scene Fully Loaded");
        
        // You could add logic here to lower the jet volume 
        // or trigger a 'Welcome' message.
    });
});