import React from "react";

export default function Human({ nodes, materials }) {
  return (
    <group>
      <mesh
        geometry={nodes.Hand.geometry}
        material={materials["Skin.002"]}
        position={[-2.082, 3.702, 27.181]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Hand_sleeve.geometry}
        material={materials["Sleeve.001"]}
        position={[-2.082, 3.702, 27.181]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.Head.geometry}
        material={materials["Skin.003"]}
        position={[-0.033, 4.323, 6.102]}
        rotation={[-3.089, 0, Math.PI]}
      />
      <group
        position={[0.485, 5.41, 6.731]}
        rotation={[-1.446, -0.001, 3.056]}
        scale={1.446}
      >
        <mesh
          geometry={nodes.Sphere002.geometry}
          material={materials.Eyeyball}
        />
        <mesh
          geometry={nodes.Sphere002_1.geometry}
          material={materials.Pupil}
        />
      </group>
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials.Eyebrow}
        position={[0.572, 5.953, 7.037]}
        rotation={[1.623, 0, -3.142]}
        scale={[1.652, 0.78, 0.557]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={materials.Hair}
        position={[-0.033, 5.739, 5.732]}
        rotation={[2.904, 0, -3.142]}
        scale={[4.911, 4.19, 4.808]}
      />
      <mesh
        geometry={nodes.Body.geometry}
        material={materials.Shirt}
        position={[0.04, 2.451, 5.167]}
        rotation={[-3.089, 0, Math.PI]}
        scale={1.508}
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        material={materials["Sleeve.002"]}
        position={[0.109, 3.713, 5.708]}
        rotation={[1.623, 0, -3.142]}
        scale={[3.735, 0.858, 0.627]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials["Material.019"]}
        position={[-0.402, 6.53, 6.409]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.626}
      />
      <mesh
        geometry={nodes.Cube018.geometry}
        material={materials["Material.019"]}
        position={[-0.075, 6.561, 6.471]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.626}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials["Material.019"]}
        position={[0.216, 6.554, 6.592]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.626}
      />
      <mesh
        geometry={nodes.Cube025.geometry}
        material={materials["Material.019"]}
        position={[0.59, 6.525, 6.592]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.626}
      />
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials["Material.019"]}
        position={[0.973, 6.605, 6.592]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.626}
      />
      <mesh
        geometry={nodes.Cube027.geometry}
        material={materials["Material.019"]}
        position={[-0.373, 6.516, 6.358]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.626}
      />
      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials["Material.019"]}
        position={[-1.148, 5.778, 6.32]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.341}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials["Material.019"]}
        position={[-1.183, 5.433, 6.32]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.341}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials["Material.019"]}
        position={[0.966, 6.025, 6.494]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.287}
      />
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials["Material.019"]}
        position={[1.079, 5.711, 6.494]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.287}
      />
    </group>
  );
}
