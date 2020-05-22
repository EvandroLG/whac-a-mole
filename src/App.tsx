import React, { useState } from 'react';
import useTimer from './useTimer';
import useRandomSquare from './useRandomSquare';
import { range } from 'ramda';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const square = useRandomSquare();
  const counter = useTimer(60);

  return (
    <div className="App">
      <h1>Whack-A-Mole</h1>
      <div className="App-score">{score}</div>
      <div className="App-time">{counter}</div>
      <div className="App-grid">
        {range(0, 9).map((key) => (
          <div
            key={key}
            className={`App-square ${key === square && 'App-square--mole'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
