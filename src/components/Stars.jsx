import React, { useState } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

let randomCoords = Array.from({ length: 1000 }, () => [
  Math.floor(Math.random() * 100 - 50),
  Math.floor(Math.random() * 100 - 50),
  Math.floor(Math.random() * 100 - 50),
]);

const farPoint = Math.sqrt(50 ** 2 + 100 ** 2 + 50 ** 2);

let dbn = -0.01;
let dbm = 0.01;
let dbf = -0.01;

export default function Stars() {
  const [bloomNear, setbloomNear] = useState(1);
  const [bloomMed, setbloomMed] = useState(0.66);
  const [bloomFar, setbloomFar] = useState(0.33);

  const starsBloomColorNear = new Color("#ffffff");
  const starsBloomColorMed = new Color("#ffffff");
  const starsBloomColorFar = new Color("#ffffff");

  starsBloomColorNear.multiplyScalar(bloomNear);
  starsBloomColorMed.multiplyScalar(bloomMed);
  starsBloomColorFar.multiplyScalar(bloomFar);

  useFrame(() => {
    if (bloomNear >= 0.9) {
      dbn = -0.01;
    } else if (bloomNear <= 0) {
      dbn = 0.01;
    }

    if (bloomMed >= 0.9) {
      dbm = -0.01;
    } else if (bloomMed <= 0) {
      dbm = 0.01;
    }

    if (bloomFar >= 0.9) {
      dbf = -0.01;
    } else if (bloomFar <= 0) {
      dbf = 0.01;
    }

    setbloomNear(bloomNear + dbn);
    setbloomMed(bloomMed + dbm);
    setbloomFar(bloomFar + dbf);

    // console.log("Near:" + bloomNear, "Med:" + bloomMed, "Far:" + bloomFar);
  });

  return (
    <group>
      {randomCoords.map((x) => (
        <mesh
          key={randomCoords.indexOf(x)}
          position={[x[0], x[1], x[2]]}
          scale={[0.05, 0.05, 0.05]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial
            color={
              Math.sqrt(x[0] ** 2 + x[1] ** 2 + x[2] ** 2) <= farPoint / 3
                ? starsBloomColorNear
                : Math.sqrt(x[0] ** 2 + x[1] ** 2 + x[2] ** 2) <=
                  (2 * farPoint) / 3
                ? starsBloomColorMed
                : starsBloomColorFar
            }
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
