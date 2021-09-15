import React, { useRef, useState } from "react";
import "./CounterStyle.css";

export const Stopwatch = () => {
  //Stopwatch
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(true);
  const timerRef = useRef();

  function startTimer() {
    timerRef.current = setInterval(() => {
      setCounter((p) => p + 1);
    }, 10);
  }
  let ms = counter % 100;
  let sec = Math.floor(counter / 100) % 60;
  let min = Math.floor(counter / 6000) % 60;
  let hour = Math.floor(counter / 3600000) % 24;

  return (
    <>
      <div>
        <div className="timeDisp">
          {hour}
          <span className="unitDisp">h </span>
          {min}
          <span className="unitDisp">m </span>
          {sec}
          <span className="unitDisp">s </span>
          <span className="unitDisp2">{ms}</span>
        </div>
        {pause ? (
          <button
            onClick={() => {
              setPause(false);
              startTimer();
            }}
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => {
              setPause(true);
              clearInterval(timerRef.current);
            }}
          >
            Pause
          </button>
        )}
        <button
          onClick={() => {
            clearInterval(timerRef.current);
            setPause(true);
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
