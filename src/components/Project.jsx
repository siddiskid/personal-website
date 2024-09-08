import React from "react";
import "./styles.css";

export default function Project({ projName, projDesc, projStack }) {
  const logoLookup = {
    Python: "./public/icons/PythonLogo.svg",
    PyTorch: "./public/icons/PyTorchLogo.png",
    Tensorflow: "./public/icons/TensorflowLogo.webp",
    Numpy: "./public/icons/NumpyLogo.svg",
    Pandas: "./public/icons/PandasLogo.svg",
    Matplotlib: "./public/icons/MatplotlibLogo.png",
    Selenium: "./public/icons/SeleniumLogo.png",
    JS: "./public/icons/JSLogo.png",
    React: "./public/icons/ReactLogo.svg",
    MongoDB: "./public/icons/MongoDBLogo.svg",
    ExpressJS: "./public/icons/ExpressJSLogo.png",
    Firebase: "./public/icons/FirebaseLogo.png",
    ThreeJS: "./public/icons/ThreeJSLogo.png",
    Flutter: "./public/icons/FlutterLogo.png",
    "C++": "./public/icons/C++Logo.png",
    C: "./public/icons/CLogo.png",
    Java: "./public/icons/JavaLogo.webp",
    R: "./public/icons/RLogo.png",
    Matlab: "./public/icons/MatlabLogo.png",
  };

  return (
    <div className="project">
      <div className="projectWrapper">
        <div
          className={
            projName ==
            "Hover on a project to preview, click on it to check it out"
              ? "projectNameIntro"
              : "projectName"
          }
        >
          {projName}
        </div>
        <div className="projectDesc">{projDesc != "NONE" ? projDesc : ""}</div>
        <div className="projectStack">
          {projStack == "NONE"
            ? ""
            : projStack.map((abst) => (
                <img className="icon" src={logoLookup[abst]}></img>
              ))}
        </div>
      </div>
    </div>
  );
}
