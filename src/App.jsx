import "./App.css";
import {
  Stats,
  OrbitControls,
  Circle,
  Html,
  ScrollControls,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Room from "./components/Room";
import { Vector3 } from "three";
import { Suspense, useEffect, useRef } from "react";
import Writing from "./Writing";

const PosLog = () => {
  const cameraWorldPosition = new Vector3();
  const { camera } = useThree();

  useFrame(() => {
    console.log(camera.getWorldPosition(cameraWorldPosition));
    console.log(camera.rotation);
  });
};

export default function App() {
  const CAMERA_INITIAL_POSITION = [0, 5.3533, 13.9358];
  const CAMERA_INITIAL_ROTATION = [0, 0, 0];

  return (
    <Canvas
      camera={{
        position: CAMERA_INITIAL_POSITION,
        rotation: CAMERA_INITIAL_ROTATION,
        fov: 45,
      }}
    >
      {/* <PosLog /> */}
      <color args={[0, 0, 0]} attach={"background"} />
      <Suspense fallback={null}>
        <ScrollControls pages={5}>
          <Writing />
          <Room />
        </ScrollControls>
      </Suspense>
      <directionalLight position={[0.485, 5.41, 6.731]} intensity={1} />
      <ambientLight intensity={1} />
      <EffectComposer>
        <Bloom mipmapBlur intensity={1.2} />
      </EffectComposer>
    </Canvas>
  );
}
