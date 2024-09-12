import React from "react";
import { Color } from "three";

const keyboardBloomColor = new Color("ffffff");
const mousepadBloomColor = new Color("ffffff");

keyboardBloomColor.multiplyScalar(1.5);
mousepadBloomColor.multiplyScalar(1.5);

export default function KeyboardMouse({ nodes, materials }) {
  return (
    <group>
      {/* MOUSEPAD */}
      <mesh
        geometry={nodes.Mousepad_neon_back.geometry}
        material={nodes.Mousepad_neon_back.material}
        position={[0.162, 3.549, 36.353]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 13.085, 0.01]}
      >
        <meshBasicMaterial color={mousepadBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Mousepad_neon_front.geometry}
        material={nodes.Mousepad_neon_front.material}
        position={[0.162, 3.549, 34.114]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 13.085, 0.01]}
      >
        <meshBasicMaterial color={mousepadBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Mousepad_neon_right.geometry}
        material={nodes.Mousepad_neon_right.material}
        position={[-3.112, 3.549, 35.235]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 4.477, 0.01]}
      >
        <meshBasicMaterial color={mousepadBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Mousepad_neon_left.geometry}
        material={nodes.Mousepad_neon_left.material}
        position={[3.435, 3.549, 35.235]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 4.477, 0.01]}
      >
        <meshBasicMaterial color={mousepadBloomColor} toneMapped={false} />
      </mesh>

      {/* KEYBOARD */}
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[-0.061, 3.787, 34.606]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.001"]}
        position={[-0.319, 3.787, 34.573]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.001"]}
        position={[0.197, 3.787, 34.639]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials["Material.001"]}
        position={[0.456, 3.787, 34.673]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials["Material.001"]}
        position={[2.164, 3.787, 34.892]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials["Material.001"]}
        position={[2.421, 3.787, 34.926]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials["Material.001"]}
        position={[2.679, 3.787, 34.959]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials["Material.001"]}
        position={[-0.176, 3.786, 34.818]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials["Material.001"]}
        position={[2.561, 3.786, 35.171]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["Material.001"]}
        position={[-0.283, 3.786, 35.031]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials["Material.001"]}
        position={[-0.383, 3.786, 35.245]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Material.001"]}
        position={[-0.367, 3.787, 35.473]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials["Material.001"]}
        position={[2.564, 3.786, 35.397]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials["Material.001"]}
        position={[2.572, 3.786, 35.626]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials["Material.001"]}
        position={[1.309, 3.787, 34.782]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Material.001"]}
        position={[2.228, 3.786, 35.128]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials["Material.001"]}
        position={[2.263, 3.786, 35.359]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials["Material.001"]}
        position={[2.31, 3.786, 35.592]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.Cube023.geometry}
        material={materials["Material.001"]}
        position={[2.583, 3.732, 35.865]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[0.106, 0.105, 0.106]}
      />
      <mesh
        geometry={nodes.base.geometry}
        material={materials["Material.004"]}
        position={[1.121, 3.52, 35.212]}
        rotation={[-Math.PI, 0.128, -Math.PI]}
        scale={[1.719, 0.133, 0.636]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.Mousepad}
        position={[0.162, 3.551, 35.235]}
        scale={[13.094, 2.348, 4.468]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[1.167, 3.684, 34.884]}
        rotation={[Math.PI, 0.128, Math.PI / 2]}
        scale={[0.01, 6.499, 0.013]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder012.geometry}
        material={nodes.Cylinder012.material}
        position={[1.147, 3.684, 35.105]}
        rotation={[Math.PI, 0.128, Math.PI / 2]}
        scale={[0.01, 6.499, 0.013]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder013.geometry}
        material={nodes.Cylinder013.material}
        position={[1.108, 3.684, 35.327]}
        rotation={[Math.PI, 0.128, Math.PI / 2]}
        scale={[0.01, 6.499, 0.013]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder014.geometry}
        material={nodes.Cylinder014.material}
        position={[1.08, 3.684, 35.551]}
        rotation={[Math.PI, 0.128, Math.PI / 2]}
        scale={[0.01, 6.499, 0.013]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder015.geometry}
        material={nodes.Cylinder015.material}
        position={[2.549, 3.684, 34.947]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder016.geometry}
        material={nodes.Cylinder016.material}
        position={[2.289, 3.684, 34.913]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder017.geometry}
        material={nodes.Cylinder017.material}
        position={[2.031, 3.684, 34.879]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder018.geometry}
        material={nodes.Cylinder018.material}
        position={[0.582, 3.684, 34.694]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder019.geometry}
        material={nodes.Cylinder019.material}
        position={[0.325, 3.684, 34.662]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder020.geometry}
        material={nodes.Cylinder020.material}
        position={[0.068, 3.684, 34.625]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder021.geometry}
        material={nodes.Cylinder021.material}
        position={[-0.191, 3.684, 34.59]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder022.geometry}
        material={nodes.Cylinder022.material}
        position={[0.126, 3.684, 34.862]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder023.geometry}
        material={nodes.Cylinder023.material}
        position={[-0.06, 3.684, 35.065]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder024.geometry}
        material={nodes.Cylinder024.material}
        position={[-0.231, 3.684, 35.265]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder025.geometry}
        material={nodes.Cylinder025.material}
        position={[-0.172, 3.684, 35.502]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder026.geometry}
        material={nodes.Cylinder026.material}
        position={[0.048, 3.684, 35.525]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder027.geometry}
        material={nodes.Cylinder027.material}
        position={[-0.01, 3.684, 35.297]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder028.geometry}
        material={nodes.Cylinder028.material}
        position={[0.164, 3.684, 35.094]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder029.geometry}
        material={nodes.Cylinder029.material}
        position={[0.384, 3.684, 35.123]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder030.geometry}
        material={nodes.Cylinder030.material}
        position={[0.349, 3.684, 34.892]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder031.geometry}
        material={nodes.Cylinder031.material}
        position={[0.211, 3.684, 35.327]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder032.geometry}
        material={nodes.Cylinder032.material}
        position={[0.267, 3.684, 35.559]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder033.geometry}
        material={nodes.Cylinder033.material}
        position={[0.488, 3.684, 35.587]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder034.geometry}
        material={nodes.Cylinder034.material}
        position={[0.432, 3.684, 35.353]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder035.geometry}
        material={nodes.Cylinder035.material}
        position={[0.605, 3.684, 35.15]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder036.geometry}
        material={nodes.Cylinder036.material}
        position={[0.653, 3.684, 35.383]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder037.geometry}
        material={nodes.Cylinder037.material}
        position={[0.707, 3.684, 35.615]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder038.geometry}
        material={nodes.Cylinder038.material}
        position={[0.874, 3.684, 35.412]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder039.geometry}
        material={nodes.Cylinder039.material}
        position={[1.094, 3.684, 35.439]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder040.geometry}
        material={nodes.Cylinder040.material}
        position={[0.929, 3.684, 35.643]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder041.geometry}
        material={nodes.Cylinder041.material}
        position={[1.148, 3.684, 35.669]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder042.geometry}
        material={nodes.Cylinder042.material}
        position={[1.372, 3.684, 35.699]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder043.geometry}
        material={nodes.Cylinder043.material}
        position={[1.314, 3.684, 35.471]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder044.geometry}
        material={nodes.Cylinder044.material}
        position={[1.536, 3.684, 35.496]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder045.geometry}
        material={nodes.Cylinder045.material}
        position={[1.591, 3.684, 35.726]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder046.geometry}
        material={nodes.Cylinder046.material}
        position={[1.756, 3.684, 35.525]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder047.geometry}
        material={nodes.Cylinder047.material}
        position={[1.812, 3.684, 35.757]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder048.geometry}
        material={nodes.Cylinder048.material}
        position={[2.032, 3.684, 35.785]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder049.geometry}
        material={nodes.Cylinder049.material}
        position={[2.252, 3.684, 35.813]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder050.geometry}
        material={nodes.Cylinder050.material}
        position={[2.473, 3.684, 35.844]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder051.geometry}
        material={nodes.Cylinder051.material}
        position={[1.977, 3.684, 35.555]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder052.geometry}
        material={nodes.Cylinder052.material}
        position={[2.198, 3.684, 35.584]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder053.geometry}
        material={nodes.Cylinder053.material}
        position={[2.42, 3.684, 35.609]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder054.geometry}
        material={nodes.Cylinder054.material}
        position={[2.374, 3.684, 35.378]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder055.geometry}
        material={nodes.Cylinder055.material}
        position={[2.151, 3.684, 35.348]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder056.geometry}
        material={nodes.Cylinder056.material}
        position={[1.929, 3.684, 35.321]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder057.geometry}
        material={nodes.Cylinder057.material}
        position={[1.71, 3.684, 35.291]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder058.geometry}
        material={nodes.Cylinder058.material}
        position={[1.488, 3.684, 35.262]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder059.geometry}
        material={nodes.Cylinder059.material}
        position={[1.268, 3.684, 35.233]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder060.geometry}
        material={nodes.Cylinder060.material}
        position={[1.047, 3.684, 35.203]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder061.geometry}
        material={nodes.Cylinder061.material}
        position={[0.826, 3.684, 35.175]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder062.geometry}
        material={nodes.Cylinder062.material}
        position={[0.565, 3.684, 34.919]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder063.geometry}
        material={nodes.Cylinder063.material}
        position={[0.79, 3.684, 34.948]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder064.geometry}
        material={nodes.Cylinder064.material}
        position={[1.013, 3.684, 34.977]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder065.geometry}
        material={nodes.Cylinder065.material}
        position={[1.234, 3.684, 35.005]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder066.geometry}
        material={nodes.Cylinder066.material}
        position={[1.454, 3.684, 35.033]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder067.geometry}
        material={nodes.Cylinder067.material}
        position={[1.674, 3.684, 35.061]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder068.geometry}
        material={nodes.Cylinder068.material}
        position={[1.896, 3.684, 35.09]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder069.geometry}
        material={nodes.Cylinder069.material}
        position={[2.117, 3.684, 35.119]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder070.geometry}
        material={nodes.Cylinder070.material}
        position={[2.34, 3.684, 35.147]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.01, 0.414, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder071.geometry}
        material={nodes.Cylinder071.material}
        position={[1.187, 3.684, 34.657]}
        rotation={[Math.PI, 0.128, Math.PI / 2]}
        scale={[0.01, 6.549, 0.013]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder072.geometry}
        material={nodes.Cylinder072.material}
        position={[1.036, 3.684, 35.765]}
        rotation={[Math.PI, 0.128, Math.PI / 2]}
        scale={[0.01, 6.499, 0.013]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder073.geometry}
        material={nodes.Cylinder073.material}
        position={[-0.507, 3.684, 35]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.012, 2.246, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder074.geometry}
        material={nodes.Cylinder074.material}
        position={[2.747, 3.684, 35.423]}
        rotation={[Math.PI / 2, 0, -3.014]}
        scale={[0.012, 2.246, 0.01]}
      >
        <meshBasicMaterial color={keyboardBloomColor} toneMapped={false} />
      </mesh>

      {/* MOUSE */}
      <group
        position={[-2.061, 3.809, 35.169]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.18}
      >
        <mesh
          geometry={nodes.Cube021_1.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Cube021_2.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Cube021_3.geometry}
          material={materials["Material.012"]}
        />
      </group>
    </group>
  );
}
