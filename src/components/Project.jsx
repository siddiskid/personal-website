import React from "react";
import "./styles.css";

export default function Project({ projName, projDesc, projStack }) {
  const logoLookup = {
    Python: "/icons/PythonLogo.svg",
    PyTorch: "/icons/PyTorchLogo.png",
    Tensorflow: "/icons/TensorflowLogo.webp",
    Numpy: "icons/NumpyLogo.svg",
    Pandas: "icons/PandasLogo.svg",
    Matplotlib: "icons/MatplotlibLogo.png",
    Selenium: "/icons/SeleniumLogo.png",
    JS: "/icons/JSLogo.png",
    React: "/icons/ReactLogo.svg",
    MongoDB: "icons/MongoDBLogo.svg",
    ExpressJS: "icons/ExpressJSLogo.png",
    Firebase: "icons/FirebaseLogo.png",
    ThreeJS: "icons/ThreeJSLogo.png",
    Flutter: "icons/FlutterLogo.png",
    "C++": "icons/C++Logo.png",
    C: "icons/CLogo.png",
    Java: "/icons/JavaLogo.webp",
    R: "icons/RLogo.png",
    Matlab: "icons/MatlabLogo.png",
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
