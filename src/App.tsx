import React, { useState, useCallback, useEffect } from 'react';
import useTimer from './useTimer';
import useRandomSquare from './useRandomSquare';
import { range } from 'ramda';
import './App.css';

const isOver = (counter: number) => counter === 0;

const App = () => {
  const [score, setScore] = useState(0);
  const [square, startRandomSquare, stopRandomSquare] = useRandomSquare();
  const [counter, startCounter] = useTimer(60);

  const updateScore = useCallback(
    (key) => key === square && setScore(score + 1),
    [square, score]
  );

  const start = useCallback(() => {
    startCounter();
    startRandomSquare();
    setScore(0);
  }, [startCounter, startRandomSquare]);

  useEffect(() => {
    isOver(counter) && stopRandomSquare();
  }, [counter, stopRandomSquare]);

  return (
    <div className="App">
      <h1 className="App-title">Whack-A-Mole</h1>

      {isOver(counter) ? (
        <>
          <h2>Game over</h2>
          <div className="App-score">
            <strong>Final score: </strong>
            {score}
          </div>
          <button type="button" className="App-button" onClick={start}>
            Restart
          </button>
        </>
      ) : (
        <>
          <button type="button" className="App-button" onClick={start}>
            Start / Restart
          </button>
          <div className="App-score">
            <strong>Score: </strong>
            {score}
          </div>
          <div className="App-time">
            <strong>Time: </strong>
            {counter}
          </div>
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
};

export default App;
