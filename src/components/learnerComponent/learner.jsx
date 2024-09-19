import React from "react";
import Score from "../scoresComponent/score";
import "./Learner.css";
function Learner({ learner }) {
  return (
    <div className="member">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h2>Scores:</h2>
    
      {learner.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default Learner;
