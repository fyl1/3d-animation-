const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight
);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xdddddd);

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
camera.position.z = 5;
const points = [
  new THREE.Vector3(0, 0),
  new THREE.Vector3(1, 1),
  new THREE.Vector3(4, 4, 1),
];

const material = new THREE.LineBasicMaterial({
  color: 0xffffff,
});
const geometryLine = new THREE.BufferGeometry().setFromPoints(points);
const Line = new THREE.Line(geometryLine, material);
scene.add(Line);


const material1 = new THREE.MeshBasicMaterial({color: 0x000dddd}) 
const boxGeo = new THREE.BoxGeometry(1, 1, 1)
const cube = new THREE.Mesh(boxGeo)
scene.add(cube)
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.011
}
animate();
