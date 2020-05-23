import React, { useState, useCallback, useEffect } from 'react';
import useTimer from './useTimer';
import useRandomSquare from './useRandomSquare';
import { range } from 'ramda';
import './App.css';

const isOver = (counter: number) => counter === 0;

function App() {
  const [score, setScore] = useState(0);
  const [square, stopRandomSquare] = useRandomSquare();
  const counter = useTimer(60);
  const updateScore = useCallback(
    (key) => key === square && setScore(score + 1),
    [square, score]
  );

  useEffect(() => {
    if (isOver(counter)) {
      stopRandomSquare();
    }
  }, [counter, stopRandomSquare]);

  return (
    <div className="App">
      <h1>Whack-A-Mole</h1>
      {isOver(counter) ? (
        <>
          <h2>Game over</h2>
          <div className="App-score">{score}</div>
        </>
      ) : (
        <>
          <div className="App-score">{score}</div>
          <div className="App-time">{counter}</div>
          <div className="App-grid">
            {range(0, 9).map((key) => (
              <div
                onClick={() => updateScore(key)}
                key={key}
                className={`App-square ${key === square && 'App-square--mole'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
