AFRAME.registerComponent('pool-animation', {
  tick: function (t, dt) {
    var mesh = this.el.getObject3D('mesh');
    if (mesh && mesh.material) {
      var mat = mesh.material;
      
      // Ensure both the image and the 'bumps' repeat infinitely
      if (mat.map) mat.map.wrapS = mat.map.wrapT = THREE.RepeatWrapping;
      if (mat.normalMap) mat.normalMap.wrapS = mat.normalMap.wrapT = THREE.RepeatWrapping;

      // Move the main texture slowly
      if (mat.map) {
        mat.map.offset.x += 7.00005 * dt;
      }

      // Move the ripples (Normal Map) slightly faster in a different direction
      // This creates the "ripple" effect instead of a simple slide
      if (mat.normalMap) {
        mat.normalMap.offset.x -= 0.50015 * dt;
        mat.normalMap.offset.y += 0.0001 * dt;
      }
    }
  }
});