import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animate, setAnimate] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimate(progress), 1000);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animate - 100}%)`,
          color: progress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-value={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const Bars = [0, 5, 10, 40, 58, 80, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {Bars.map((value) => {
        return <ProgressBar key={value} progress={value} />;
      })}
    </div>
  );
}
