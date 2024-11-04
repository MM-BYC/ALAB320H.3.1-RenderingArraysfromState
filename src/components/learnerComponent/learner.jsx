import React from "react";
import Score from "../scoresComponent/score";
import "./learner.css";
function Learner({ learner }) {
  return (
    <div className="member">
      <h2 className="learnerName">{learner.name}</h2>
      <p className="bio">{learner.bio}</p>
      <h2 className="learnerScores">Scores:</h2>

      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default Learner;
