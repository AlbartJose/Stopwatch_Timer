import React, { useEffect, useRef, useState } from "react";
import "./CounterStyle.css";

var initValue = {
  sec: 30,
  min: 2,
  hr: 0,
};

export const CountTimer = () => {
  //Stopwatch
  var sec;
  var min;
  var hour;
  function sum(obj) {
    return obj.hr * 3600 + obj.min * 60 + obj.sec;
  }

  const [formData, setFormData] = useState(initValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: Number(value),
    });
  };

  const [counter, setCounter] = useState(sum(initValue));
  const [pause, setPause] = useState(true);
  const timerRef = useRef();

  useEffect(() => {
    setCounter(sum(formData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sec = counter % 60;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    min = Math.floor(counter / 60) % 60;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    hour = Math.floor(counter / 3600) % 24;
  }, [formData]);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setCounter((p) => {
        if (p === 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
  }
  sec = counter % 60;
  min = Math.floor(counter / 60) % 60;
  hour = Math.floor(counter / 3600) % 24;

  //Timer

  return (
    <>
      <div>
        <div className="inputDiv">
          <input
            disabled={!pause}
            onChange={handleChange}
            placeholder={0}
            type="number"
            min={0}
            max={23}
            name="hr"
          ></input>
          <span>h </span>
          <input
            disabled={!pause}
            onChange={handleChange}
            placeholder={2}
            type="number"
            min={0}
            max={59}
            name="min"
          ></input>
          <span>m </span>
          <input
            disabled={!pause}
            onChange={handleChange}
            placeholder={30}
            type="number"
            min={0}
            max={59}
            name="sec"
          ></input>
          <span>s</span>
        </div>
        <div className="timeDisp">
          {hour}
          <span className="unitDisp">h </span>
          {min}
          <span className="unitDisp">m </span>
          {sec}
          <span className="unitDisp">s</span>
        </div>
        {pause ? (
          <button
            disabled={counter === 0}
            onClick={() => {
              setPause(false);
              startTimer();
            }}
          >
            Start
          </button>
        ) : (
          <button
            disabled={counter === 0}
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
            setCounter(sum(formData));
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
