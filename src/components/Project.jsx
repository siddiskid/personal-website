import React from "react";
import "./styles.css";

export default function Project({ projName, projDesc, projStack }) {
  const logoLookup = {
    Python: "https://d38c2om1h5phmk.cloudfront.net/icons/PythonLogo.svg",
    PyTorch: "https://d38c2om1h5phmk.cloudfront.net/icons/PyTorchLogo.png",
    Tensorflow:
      "https://d38c2om1h5phmk.cloudfront.net/icons/TensorflowLogo.webp",
    Numpy: "https://d38c2om1h5phmk.cloudfront.net/icons/NumpyLogo.svg",
    Pandas: "https://d38c2om1h5phmk.cloudfront.net/icons/PandasLogo.svg",
    Matplotlib:
      "https://d38c2om1h5phmk.cloudfront.net/icons/MatplotlibLogo.png",
    Selenium: "https://d38c2om1h5phmk.cloudfront.net/icons/SeleniumLogo.png",
    JS: "https://d38c2om1h5phmk.cloudfront.net/icons/JSLogo.png",
    React: "https://d38c2om1h5phmk.cloudfront.net/icons/ReactLogo.svg",
    MongoDB: "https://d38c2om1h5phmk.cloudfront.net/icons/MongoDBLogo.svg",
    ExpressJS: "https://d38c2om1h5phmk.cloudfront.net/icons/ExpressJSLogo.png",
    Firebase: "https://d38c2om1h5phmk.cloudfront.net/icons/FirebaseLogo.png",
    ThreeJS: "https://d38c2om1h5phmk.cloudfront.net/icons/ThreeJSLogo.png",
    Flutter: "https://d38c2om1h5phmk.cloudfront.net/icons/FlutterLogo.png",
    "C++": "https://d38c2om1h5phmk.cloudfront.net/icons/C++Logo.png",
    C: "https://d38c2om1h5phmk.cloudfront.net/icons/CLogo.png",
    Java: "https://d38c2om1h5phmk.cloudfront.net/icons/JavaLogo.webp",
    R: "https://d38c2om1h5phmk.cloudfront.net/icons/RLogo.png",
    Matlab: "https://d38c2om1h5phmk.cloudfront.net/icons/MatlabLogo.png",
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
