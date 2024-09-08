import { TextureLoader } from "three";
import React from "react";
import { Color } from "three";
import { Text, useFont } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

const textBloomColor = new Color("#fff");
textBloomColor.multiplyScalar(1.5);

const techStack = {
  Python: [1, "/icons/PythonLogo.svg"],
  PyTorch: [2, "/icons/PyTorchLogo.png"],
  Tensorflow: [3, "/icons/TensorflowLogo.webp"],
  Numpy: [4, "icons/NumpyLogo.svg"],
  Pandas: [5, "icons/PandasLogo.svg"],
  Matplotlib: [6, "icons/MatplotlibLogo.png"],
  Selenium: [7, "/icons/SeleniumLogo.png"],
  JavaScript: [8, "/icons/JSLogo.png"],
  React: [9, "/icons/ReactLogo.png"],
  MongoDB: [10, "icons/MongoDBLogo.svg"],
  ExpressJS: [11, "icons/ExpressJSLogo.png"],
  Firebase: [12, "icons/FirebaseLogo.png"],
  ThreeJS: [13, "icons/ThreeJSLogo.png"],
  Node: [14, "icons/NodeLogo.png"],
  Flutter: [14, "icons/FlutterLogo.png"],
  "C++": [15, "icons/C++Logo.png"],
  C: [16, "icons/CLogo.png"],
  Java: [17, "/icons/JavaLogo.webp"],
  R: [18, "icons/RLogo.png"],
  Matlab: [19, "icons/MatlabLogo.png"],
};

export default function Writing() {
  return (
    <group>
      <Text
        position-x={0}
        position-y={6.9033}
        position-z={9.9358}
        font="fonts/Roboto/Roboto-Thin.ttf"
        scale={0.5}
      >
        Hey, I'm Siddarth
        <meshBasicMaterial color={textBloomColor} toneMapped={false} />
      </Text>
      <Text
        position-x={7.005}
        position-y={5.8679}
        position-z={12.5908}
        rotation={[0, -0.7691, 0]}
        font="fonts/Roboto/Roboto-Thin.ttf"
        scale={0.3}
        lineHeight={1.5}
        textAlign="left"
      >
        I am a passionate developer with keen interests{"\n"}in Artificial
        Intelligence, Quantum Computing,{"\n"}and Computational Physics and
        Astrophysics
        <meshBasicMaterial color={textBloomColor} toneMapped={false} />
      </Text>
      <Text
        position-x={9.013}
        position-y={6.8679}
        position-z={21.0908}
        rotation={[0, -1.50568, 0]}
        font="fonts/Roboto/Roboto-Thin.ttf"
        scale={0.3}
        lineHeight={1.5}
        textAlign="left"
      >
        My current tech stack includes: {"\n"}
        <meshBasicMaterial color={textBloomColor} toneMapped={false} />
      </Text>
      {Object.entries(techStack).map(([key, value]) => (
        <mesh
          key={value[0]}
          position-x={9.013}
          position-y={6.2679 - Math.floor((value[0] - 1) / 7) * 0.75}
          position-z={19.3808 + ((value[0] - 1) % 7) * 0.75}
          rotation={[0, -1.50568, 0]}
          scale={0.14}
        >
          <planeGeometry attach="geometry" args={[4, 4]} />
          <meshBasicMaterial
            color={"white"}
            attach="material"
            map={useLoader(TextureLoader, value[1])}
            toneMapped={true}
          />
        </mesh>
        // <Image
        //   position-x={9.013}
        //   position-y={5.4179 - Math.floor(key / 5) * 0.6}
        //   position-z={19.3808 + (key % 5)}
        //   rotation={[0, -1.50568, 0]}
        //   url={value}
        //   scale={0.5}
        // ></Image>
      ))}
      <Text
        position-x={6.7001}
        position-y={5.8679}
        position-z={28.9708}
        rotation={[0, -2.1837, 0]}
        font="fonts/Roboto/Roboto-Thin.ttf"
        scale={0.3}
        textAlign="left"
      >
        Here's some of my projects...
        <meshBasicMaterial color={textBloomColor} toneMapped={false} />
      </Text>
    </group>
  );
}

useFont.preload("fonts/Roboto/Roboto-Thin.ttf");
