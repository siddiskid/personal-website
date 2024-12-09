const logoLookup = {
  Python: "https://storage.cloud.google.com/coolest_images_bucket/PythonLogo.svg",
  PyTorch: "https://storage.cloud.google.com/coolest_images_bucket/PyTorchLogo.png",
  Tensorflow: "https://storage.cloud.google.com/coolest_images_bucket/TensorflowLogo.webp",
  Numpy: "https://storage.cloud.google.com/coolest_images_bucket/NumpyLogo.svg",
  Pandas: "https://storage.cloud.google.com/coolest_images_bucket/PandasLogo.svg",
  Matplotlib: "https://storage.cloud.google.com/coolest_images_bucket/MatplotlibLogo.png",
  Selenium: "https://storage.cloud.google.com/coolest_images_bucket/SeleniumLogo.png",
  JS: "https://storage.cloud.google.com/coolest_images_bucket/JSLogo.png",
  React: "https://storage.cloud.google.com/coolest_images_bucket/ReactLogo.svg",
  MongoDB: "https://storage.cloud.google.com/coolest_images_bucket/MongoDBLogo.svg",
  ExpressJS: "https://storage.cloud.google.com/coolest_images_bucket/ExpressJSLogo.png",
  Firebase: "https://storage.cloud.google.com/coolest_images_bucket/FirebaseLogo.png",
  ThreeJS: "https://storage.cloud.google.com/coolest_images_bucket/ThreeJSLogo.png",
  Flutter: "https://storage.cloud.google.com/coolest_images_bucket/FlutterLogo.png",
  "C++": "https://storage.cloud.google.com/coolest_images_bucket/C%2B%2BLogo.png",
  C: "https://storage.cloud.google.com/coolest_images_bucket/CLogo.png",
  Java: "https://storage.cloud.google.com/coolest_images_bucket/JavaLogo.webp",
  R: "https://storage.cloud.google.com/coolest_images_bucket/RLogo.png",
  Matlab: "https://storage.cloud.google.com/coolest_images_bucket/MatlabLogo.png",
};

export default function Project({ projName, projDesc, projStack }) {
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
                <img className="projectIcon" src={logoLookup[abst]}></img>
              ))}
        </div>
      </div>
    </div>
  );
}
