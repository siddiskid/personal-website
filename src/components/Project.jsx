import React from "react";
import "./styles.css";

export default function Project({ projName, projDesc, projStack }) {
  const logoLookup = {
    JS: "/icons/JSLogo.png",
    React: "/icons/ReactLogo.png",
    Python: "/icons/PythonLogo.svg",
    Tensorflow: "/icons/TensorflowLogo.webp",
    Java: "/icons/JavaLogo.webp",
    Selenium: "/icons/SeleniumLogo.png",
    PyTorch: "/icons/PyTorchLogo.png",
  };

  return (
    <div className="project">
      <div className="projectWrapper">
        <div
          className={
            projName ==
            "Hover on a project to get started, click on it to check it out"
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
