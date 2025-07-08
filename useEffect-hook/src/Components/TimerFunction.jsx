// src/TimerFunction.jsx
import React, { useEffect, useState } from 'react';

const TimerFunction = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    alert(" i will react only once when the component is rerender first time.")
    const intervalId = setInterval(() => {
      setTime(pretime => pretime + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      alert("time to stop")
    };
  }, []);

  return (
    <div>
      <h2>Second is: {time}</h2>
    </div>
  );
};

export default TimerFunction;
