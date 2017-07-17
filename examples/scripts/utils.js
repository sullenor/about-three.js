/* eslint-disable */
(function (window) {
  'use strict';

  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  function noop() {}

  function loadObject(url) {
    return new Promise(function (resolve, reject) {
      new THREE.ObjectLoader().load(
        url,
        function handleResult(obj) { resolve(obj); },
        noop, // progress function xhr => xhr.loader / xhr.total
        function handleError(er) { reject(er); }
      );
    });
  }

  function loadTexture(url) {
    return new Promise(function (resolve, reject) {
      new THREE.TextureLoader().load(
        url,
        function handleResult(obj) { resolve(obj); },
        noop, // progress function xhr => xhr.loader / xhr.total
        function handleError(er) { reject(er); }
      );
    });
  }

  function render(renderer) {
    function tick() {
      requestAnimationFrame(tick);
      renderer();
    }

    tick();
  }

  window.utils = {
    loadObject: loadObject,
    loadTexture: loadTexture,
    noop: noop,
    render: render,
  };

})(window);
