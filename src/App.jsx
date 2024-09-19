import { useState } from "react";
import "./App.css";

// import the data
import learnersCollection from "./components/dataComponent/learnersInfo";
// import the component
import Learner from "./components/learnerComponent/learner";

function App() {
  const [learnersData, setlearnersData] = useState(learnersCollection);

  return (
    //<> is a fragment as top level element
    <>
      <h1>Learner Scores</h1>
      <div className="title">
        {learnersData.learners.map((learner, index) => (
          <Learner key={index} learner={learner} />
        ))}
      </div>
    </>
  );
}

export default App;
