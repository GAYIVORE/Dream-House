AFRAME.registerComponent('light-switch', {
  schema: {target: {type: 'selector'}},
  init: function () {
    this.el.addEventListener('click', () => {
      let light = this.data.target;
      let currentIntensity = light.getAttribute('intensity');
      
      // Toggle logic: If off (0), turn on (2). If on, turn off (0).
      if (currentIntensity == 0) {
        light.setAttribute('intensity', 2);
        this.el.setAttribute('color', 'green'); // Visual feedback
      } else {
        light.setAttribute('intensity', 0);
        this.el.setAttribute('color', 'red');
      }
    });
  }
});
