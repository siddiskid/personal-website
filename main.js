import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.getElementById("here").appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(10, 10, 10);
scene.add(light);

const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff83,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 40;

function animate() {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}
