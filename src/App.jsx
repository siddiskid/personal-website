import "./App.css";
import { ScrollControls, GradientTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import Master from "./components/Master";
import { Color } from "three";
import { Suspense, useState, lazy } from "react";
import Loader from "./components/Loader";
import "./components/styles/master.css";
import "./components/styles/cursor.css";

const Master = lazy(() => import("./components/Master.jsx"));

const worldColor = new Color("#0d0015");

// const PosLog = () => {
//   const cameraWorldPosition = new Vector3();
//   const { camera } = useThree();

//   useFrame(() => {
//     console.log(camera.getWorldPosition(cameraWorldPosition));
//     console.log(camera.rotation);
//   });
// };

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{
          position: [0, 5.3533, 13.9358],
          rotation: [0, 0, 0],
          fov: 45,
        }}
        frameloop="demand"
      >
        {/* <PosLog /> */}
        <color args={[worldColor]} attach={"background"} />
        <ScrollControls pages={5}>
          <Master cursor={cursor} />
        </ScrollControls>
        <directionalLight position={[0.485, 5.41, 6.731]} intensity={1.5} />
        <ambientLight intensity={0.1} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={2} luminanceThreshold={1} />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
}
