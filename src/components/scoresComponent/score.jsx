import React from "react";
import "./score.css";
function Score({ score }) {
  return (
    <div className="gridContainer">
      <div className="gridItem">Date: {score.date}</div>
      <div className="gridItem">Score: {score.score}</div>
    </div>
  );
}

export default Score;
