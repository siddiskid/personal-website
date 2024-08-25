import "./App.css";
import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

export default function App() {
  const gltf = useLoader(GLTFLoader, "src/models/table.glb");

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />
      <OrbitControls target={[0, 1, 0]} />
      <Stats />
    </Canvas>
  );
}
