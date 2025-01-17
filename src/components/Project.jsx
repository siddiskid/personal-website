import { logoLookup } from "../data";

export default function Project({ projName, projDesc, projStack }) {
  return (
  <>
    {/* <div className="projectBackground"></div> */}
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
  </>
  );
}
