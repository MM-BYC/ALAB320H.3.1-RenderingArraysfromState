import { useState } from "react";
import "./App.css";

// import the data
import learnersCollection from "./components/dataComponent/learnersInfo";
// import the component
import Learner from "./components/learnerComponent/learner";
import Footer from "./components/footerComponent/footer";
// import the style
import "./components/footerComponent/footer.css";

function App() {
  const [learnersData, setlearnersData] = useState(learnersCollection);
  // year
  const year = new Date().getFullYear();

  return (
    //<> is a fragment as top level element
    <>
      <h1>Learner Scores</h1>
      <div className="title">
        {learnersData.learners.map((learner, index) => (
          <Learner key={index} learner={learner} />
        ))}
      </div>
      <p>
        <Footer year={ year} />
      </p>
    </>
  );
}

export default App;
