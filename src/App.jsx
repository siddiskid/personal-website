import "./App.css";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Room from "./components/Room";
import { Color } from "three";
import { Suspense } from "react";
import Writing from "./components/Writing";

const worldColor = new Color("#0d0015");

// const PosLog = () => {
//   const cameraWorldPosition = new Vector3();
//   const { camera } = useThree();

//   useFrame(() => {
//     console.log(camera.getWorldPosition(cameraWorldPosition));
//     console.log(camera.rotation);
//   });
// };

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
      frameloop="demand"
    >
      {/* <PosLog /> */}
      <color args={[worldColor]} attach={"background"} />
      <Suspense fallback={null}>
        <ScrollControls pages={5}>
          <Room />
          <Writing />
        </ScrollControls>
      </Suspense>
      <directionalLight position={[0.485, 5.41, 6.731]} intensity={1} />
      <ambientLight intensity={0.1} />
      <EffectComposer>
        <Bloom mipmapBlur intensity={2} luminanceThreshold={1} />
      </EffectComposer>
    </Canvas>
  );
}
