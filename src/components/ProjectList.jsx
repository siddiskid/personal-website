import React from "react";
import "./styles.css";

export default function ProjectList() {
  let projList = {
    "Ryu's Conquest": "https://github.com/siddiskid/Snakes-and-Hackers-II",
    micrograd_plus: "https://github.com/siddiskid/micrograd_plus",
    "Budget Buddy": "https://github.com/siddiskid/budget_buddy",
    "Wellness 360": "https://github.com/siddiskid/Wellness360",
  };

  return (
    <div className="wrapper">
      {Object.entries(projList).map(([key, value]) => (
        <div className="text">
          <a href={value}>{key}</a>
        </div>
      ))}
    </div>
  );
}
