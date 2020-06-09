import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const initialState = 0;
  const [clock, setClock] = useState(initialState);

  const Ticker = () => {
    setClock(new Date() - start);
  };

  let clockVal = Math.round(clock / 1000);

  useEffect(() => {
    setInterval(Ticker, 1000);
  }, []);

  return (
    <div>
      <h2>You have been on this site since :</h2>
      <br />
      <h3>{clockVal}</h3>
      <p>Seconds</p>
    </div>
  );
};

export default Timer;
