import React, {useState} from 'react';
import useTimer from './useTimer';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const counter = useTimer(60);

  return (
    <div className="App">
      <h1>Whack-A-Mole</h1>
      <div className="App-score">{score}</div>
      <div className="App-time">{counter}</div>
      <div className="App-grid">
        <div className="App-square"></div>
        <div className="App-square App-square--mole"></div>
        <div className="App-square"></div>
        <div className="App-square"></div>
        <div className="App-square"></div>
        <div className="App-square"></div>
        <div className="App-square"></div>
        <div className="App-square"></div>
        <div className="App-square"></div>
      </div>
    </div>
  );
}

export default App;
