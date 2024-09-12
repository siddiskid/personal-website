import React, { useState } from "react";
import { Color } from "three";
import { Html, useScroll } from "@react-three/drei";

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

const contactLogos = {
  Github: "https://d38c2om1h5phmk.cloudfront.net/icons/GithubLogo.png",
  Linkedin: "https://d38c2om1h5phmk.cloudfront.net/icons/LinkedinLogo.png",
  Instagram: "https://d38c2om1h5phmk.cloudfront.net/icons/InstagramLogo.png",
  Email: "https://d38c2om1h5phmk.cloudfront.net/icons/EmailLogo.png",
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
                className="contactLogo"
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
