import React, { useState } from "react";
import { Color } from "three";
import { Html, useFont, useScroll } from "@react-three/drei";

const textBloomColor = new Color("#fff");
textBloomColor.multiplyScalar(1.5);

const techStack = {
  Python: [1, "https://d38c2om1h5phmk.cloudfront.net/icons/PythonLogo.svg"],
  PyTorch: [2, "https://d38c2om1h5phmk.cloudfront.net/icons/PyTorchLogo.png"],
  Tensorflow: [
    3,
    "https://d38c2om1h5phmk.cloudfront.net/icons/TensorflowLogo.webp",
  ],
  Numpy: [4, "https://d38c2om1h5phmk.cloudfront.net/icons/NumpyLogo.svg"],
  Pandas: [5, "https://d38c2om1h5phmk.cloudfront.net/icons/PandasLogo.svg"],
  Matplotlib: [
    6,
    "https://d38c2om1h5phmk.cloudfront.net/icons/MatplotlibLogo.png",
  ],
  Selenium: [7, "https://d38c2om1h5phmk.cloudfront.net/icons/SeleniumLogo.png"],
  JavaScript: [8, "https://d38c2om1h5phmk.cloudfront.net/icons/JSLogo.png"],
  React: [9, "https://d38c2om1h5phmk.cloudfront.net/icons/ReactLogo.png"],
  MongoDB: [10, "https://d38c2om1h5phmk.cloudfront.net/icons/MongoDBLogo.svg"],
  ExpressJS: [
    11,
    "https://d38c2om1h5phmk.cloudfront.net/icons/ExpressJSLogo.png",
  ],
  Firebase: [
    12,
    "https://d38c2om1h5phmk.cloudfront.net/icons/FirebaseLogo.png",
  ],
  ThreeJS: [13, "https://d38c2om1h5phmk.cloudfront.net/icons/ThreeJSLogo.png"],
  Node: [14, "https://d38c2om1h5phmk.cloudfront.net/icons/NodeLogo.png"],
  Flutter: [14, "https://d38c2om1h5phmk.cloudfront.net/icons/FlutterLogo.png"],
  "C++": [15, "https://d38c2om1h5phmk.cloudfront.net/icons/CPPLogo.png"],
  C: [16, "https://d38c2om1h5phmk.cloudfront.net/icons/CLogo.png"],
  Java: [17, "https://d38c2om1h5phmk.cloudfront.net/icons/JavaLogo.webp"],
  R: [18, "https://d38c2om1h5phmk.cloudfront.net/icons/RLogo.png"],
  Matlab: [19, "https://d38c2om1h5phmk.cloudfront.net/icons/MatlabLogo.png"],
};

export default function Writing() {
  const [hover, setHover] = useState("NONE");
  const scroll = useScroll();

  return (
    <group>
      <Html
        position-x={0}
        position-y={6.9033}
        position-z={9.9358}
        transform
        portal={{ current: scroll.fixed }}
        scale={0.125}
      >
        <div className="helloText">Hey, I'm Siddarth</div>
      </Html>
      <Html
        position-x={7.005}
        position-y={5.8679}
        position-z={12.5908}
        rotation={[0, -0.8391, 0]}
        transform
        portal={{ current: scroll.fixed }}
        scale={0.125}
      >
        <div className="introText">
          I am a passionate developer with keen interests <br />
          in Artificial Intelligence, Quantum Computing, <br />
          and Computational Physics and Astrophysics
        </div>
      </Html>
      <Html
        position-x={9.013}
        position-y={5.8679}
        position-z={22.0908}
        rotation={[0, -1.58568, 0]}
        transform
        portal={{ current: scroll.fixed }}
        scale={0.125}
      >
        <div className="stackWrapper">
          <div className="stackText">My current tech stack includes:</div>
          <div className="icons">
            {Object.entries(techStack).map(([key, value]) => (
              <div className="logoWrapper">
                <div
                  className={
                    hover == key ? "namePreview" : "namePreview namePreviewHide"
                  }
                >
                  {key}
                </div>
                <img
                  className="logo"
                  onMouseEnter={(e) => {
                    setHover(key);
                  }}
                  onMouseLeave={() => {
                    setHover("NONE");
                  }}
                  src={value[1]}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </Html>
      <Html
        position-x={6.7001}
        position-y={5.8679}
        position-z={28.9708}
        rotation={[0, -2.1837, 0]}
        transform
        portal={{ current: scroll.fixed }}
        scale={0.125}
      >
        <div className="projectsText">Here's some of my projects...</div>
      </Html>
      {/* <Text
        position-x={0}
        position-y={6.9033}
        position-z={9.9358}
        font="fonts/Roboto/Roboto-Thin.ttf"
        scale={0.5}
      >
        Hey, I'm Siddarth
        <meshBasicMaterial color={textBloomColor} toneMapped={false} />
      </Text> */}
      {/* <Text
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
      </Text> */}
      {/* <Text
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
      ))} */}
      {/* <Text
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
      </Text> */}
    </group>
  );
}

useFont.preload("fonts/Roboto/Roboto-Thin.ttf");
