"use strict";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
var renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color(0xdddddd);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;
var points = [new THREE.Vector3(0, 0), new THREE.Vector3(1, 1), new THREE.Vector3(4, 4, 1)];
var material = new THREE.LineBasicMaterial({
  color: 0xffffff
});
var geometryLine = new THREE.BufferGeometry().setFromPoints(points);
var Line = new THREE.Line(geometryLine, material);
scene.add(Line);
var material1 = new THREE.MeshBasicMaterial({
  color: 0x000dddd
});
var boxGeo = new THREE.BoxGeometry(1, 1, 1);
var cube = new THREE.Mesh(boxGeo);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.011;
}

animate();