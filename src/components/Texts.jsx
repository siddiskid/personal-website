import React, { useState } from "react";
import { Color } from "three";
import { Html, useScroll } from "@react-three/drei";

const textBloomColor = new Color("#fff");
textBloomColor.multiplyScalar(1.5);

const techStack = {
  Python: [1, "../../public/icons/PythonLogo.svg"],
  PyTorch: [2, "../../public/icons/PyTorchLogo.png"],
  Tensorflow: [
    3,
    "../../public/icons/TensorflowLogo.webp",
  ],
  Numpy: [4, "../../public/icons/NumpyLogo.svg"],
  Pandas: [5, "../../public/icons/PandasLogo.svg"],
  Matplotlib: [
    6,
    "../../public/icons/MatplotlibLogo.png",
  ],
  Selenium: [7, "../../public/icons/SeleniumLogo.png"],
  JavaScript: [8, "../../public/icons/JSLogo.png"],
  React: [9, "../../public/icons/ReactLogo.svg"],
  MongoDB: [10, "../../public/icons/MongoDBLogo.svg"],
  ExpressJS: [
    11,
    "../../public/icons/ExpressJSLogo.png",
  ],
  Firebase: [
    12,
    "../../public/icons/FirebaseLogo.png",
  ],
  ThreeJS: [13, "../../public/icons/ThreeJSLogo.png"],
  Node: [14, "../../public/icons/NodeLogo.png"],
  Flutter: [14, "../../public/icons/FlutterLogo.png"],
  "C++": [15, "https://github.com/siddiskid/personal-website/blob/2571235df4af7dddbeb164a28d079853df1a9d09/public/icons/C++Logo.png"],
  C: [16, "../../public/icons/CLogo.png"],
  Java: [17, "../../public/icons/JavaLogo.webp"],
  R: [18, "../../public/icons/RLogo.png"],
  Matlab: [19, "../../public/icons/MatlabLogo.png"],
};

const contactLogos = {
  Github: "../../public/icons/GithubLogo.png",
  Linkedin: "../../public/icons/LinkedinLogo.webp",
  Instagram: "../../public/icons/InstagramLogo.png",
  Email: "../../public/icons/EmailLogo.png",
};

export default function Texts({ showIntro1, showIntro2, showIntro3, cursor }) {
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
        <div className="helloText">
          <span>H</span>
          <span>e</span>
          <span>y</span>
          <span>,</span> <span>I</span>
          <span>'</span>
          <span>m</span> <span>S</span>
          <span>i</span>
          <span>d</span>
          <span>d</span>
          <span>a</span>
          <span>r</span>
          <span>t</span>
          <span>h</span>
          {/* <span>Hey,</span> <span>I'm</span> <span>Siddarth</span> */}
        </div>
      </Html>
      <Html
        position-x={-1.3954}
        position-y={4.4033}
        position-z={9.9358}
        transform
        portal={{ current: scroll.fixed }}
        scale={0.125}
      >
        <div className="contactLogoWrapper">
          <span>
            <a target="_blank" href="https://github.com/siddiskid">
              <img
                onMouseEnter={() => {
                  cursor.classList.add("fill");
                }}
                onMouseLeave={() => {
                  cursor.classList.remove("fill");
                }}
                className="contactLogo githubLogo"
                src={contactLogos["Github"]}
              ></img>
            </a>
          </span>
          <span>
            <a target="_blank" href="https://www.linkedin.com/in/schiluku3724/">
              <img
                onMouseEnter={() => {
                  cursor.classList.add("fill");
                }}
                onMouseLeave={() => {
                  cursor.classList.remove("fill");
                }}
                className="contactLogo linkedinLogo"
                src={contactLogos["Linkedin"]}
              ></img>
            </a>
          </span>
        </div>
      </Html>
      <Html
        position-x={1.4954}
        position-y={4.4033}
        position-z={9.9358}
        transform
        portal={{ current: scroll.fixed }}
        scale={0.125}
      >
        <div className="contactLogoWrapper">
          <span>
            <a target="_blank" href="https://www.instagram.com/sidd.is.kid/">
              <img
                onMouseEnter={() => {
                  cursor.classList.add("fill");
                }}
                onMouseLeave={() => {
                  cursor.classList.remove("fill");
                }}
                className="contactLogo"
                src={contactLogos["Instagram"]}
              ></img>
            </a>
          </span>
          <span>
            <a target="_blank" href="mailto:siddarth_ch@outlook.com">
              <img
                onMouseEnter={() => {
                  cursor.classList.add("fill");
                }}
                onMouseLeave={() => {
                  cursor.classList.remove("fill");
                }}
                className="contactLogo emailLogo"
                src={contactLogos["Email"]}
              ></img>
            </a>
          </span>
        </div>
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
        <div className={showIntro1 ? "introText" : "introText hideIntroText"}>
          <span>I am a passionate developer with keen interests </span>
          <br />
          <span>in Artificial Intelligence, Quantum Computing,</span> <br />
          <span>and Computational Physics and Astrophysics</span>
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
        <div
          className={
            showIntro2 ? "stackWrapper" : "stackWrapper hideStackWrapper"
          }
        >
          <span>
            <div className="stackText">My current tech stack includes</div>
          </span>
          <div className="icons">
            {Object.entries(techStack).map(([key, value]) => (
              <div key={key} className="logoWrapper">
                <div
                  className={
                    hover == key ? "namePreview" : "namePreview hideNamePreview"
                  }
                >
                  {key}
                </div>
                <span>
                  <img
                    className="logo"
                    onMouseEnter={(e) => {
                      setHover(key);
                      cursor.classList.add("fill");
                    }}
                    onMouseLeave={() => {
                      setHover("NONE");
                      cursor.classList.remove("fill");
                    }}
                    src={value[1]}
                  ></img>
                </span>
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
        <div
          className={showIntro3 ? "heresProjectsText" : "hideHeresProjectsText"}
        >
          <span>Here are some of my projects...</span>
        </div>
      </Html>
    </group>
  );
}
