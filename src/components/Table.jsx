import React from "react";
import { Color } from "three";

const tableBloomColor = new Color("ffffff");
tableBloomColor.multiplyScalar(1.5);

export default function Table({ nodes, materials }) {
  return (
    <group>
      <mesh
        geometry={nodes.Table.geometry}
        material={materials["Material.008"]}
        position={[-0.002, 3.542, 35.259]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[4.336, 1.35, 1.35]}
      />
      <mesh
        position={[-4.15, 6.017, 35.726]}
        rotation={[Math.PI / 2, 0, 0.466]}
      />
      <mesh
        geometry={nodes.Table_neon_back_left.geometry}
        material={nodes.Table_neon_back_left.material}
        position={[4.332, 1.82, 36.613]}
        rotation={[0, 0, Math.PI]}
        scale={[0.01, 6.11, 0.01]}
      >
        <meshBasicMaterial color={tableBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Table_neon_back_right.geometry}
        material={nodes.Table_neon_back_right.material}
        position={[-4.332, 1.82, 36.613]}
        rotation={[0, 0, Math.PI]}
        scale={[0.01, 6.11, 0.01]}
      >
        <meshBasicMaterial color={tableBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Table_neon_front_left.geometry}
        material={nodes.Table_neon_front_left.material}
        position={[4.332, 1.82, 33.91]}
        rotation={[0, 0, Math.PI]}
        scale={[0.01, 6.11, 0.01]}
      >
        <meshBasicMaterial color={tableBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Table_neon_front_right.geometry}
        material={nodes.Table_neon_front_right.material}
        position={[-4.335, 1.82, 33.91]}
        rotation={[0, 0, Math.PI]}
        scale={[0.01, 6.11, 0.01]}
      >
        <meshBasicMaterial color={tableBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Table_neon_front_top.geometry}
        material={nodes.Table_neon_front_top.material}
        position={[0, 3.542, 33.91]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 14.872, 0.01]}
      >
        <meshBasicMaterial color={tableBloomColor} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes.Table_neon_back_top.geometry}
        material={nodes.Table_neon_back_top.material}
        position={[0, 3.542, 36.613]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 14.872, 0.01]}
      >
        <meshBasicMaterial color={tableBloomColor} toneMapped={false} />
      </mesh>
    </group>
  );
}
