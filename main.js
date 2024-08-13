import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 40;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.setClearColor(0xadd8e6, 1);
document.getElementById("sceneSpace").appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 10, 100);
light.position.set(10, 10, 10);
scene.add(light);

const loader = new GLTFLoader().setPath("/clothes_for_expeditions/");
loader.load("scene.gltf", (gltf) => {
  const mesh = gltf.scene;
  mesh.position.set(0, -10, 0);
  scene.add(mesh);
});

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function (e) {
  mouseX = (e.clientX - window.innerWidth / 2) / 100;
  mouseY = (e.clientY - window.innerHeight / 2) / 100;
});

function animate() {
  camera.position.x += (mouseX - camera.position.x) * 0.1;
  camera.position.y += (mouseY - camera.position.y) * 0.1;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
