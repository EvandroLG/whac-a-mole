import React, {useState} from 'react';
import useTimer from './useTimer';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const counter = useTimer(60);

  return (
    <div className="App">
      <h1>Whack-A-Mole</h1>
      <div className="score">{score}</div>
      <div className="time">{counter}</div>
    </div>
  );
}

export default App;
