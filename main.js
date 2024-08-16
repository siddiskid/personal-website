import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
camera.position.x = -34.695;
camera.position.y = 17.297;
camera.position.z = 102.742;
camera.rotation.x = 0.0;
camera.rotation.y = -28.21 * (Math.pi / 180);
camera.rotation.y = 0.0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.setClearColor(0x000000, 1);
document.getElementById("sceneSpace").appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x2e2e2e, 60);
light.position.set(0, 0, 0);
scene.add(light);

const loader = new GLTFLoader().setPath("/test/");
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
  camera.lookAt(10, 0, 0);

  renderer.render(scene, camera);
}

window.addEventListener("resize", (e) => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});
