import {useState, useEffect} from 'react';

const useTimer = (startTime: number) => {
  const [counter, setCounter] = useState(startTime);

  useEffect(() => {
    const timer = setInterval(() => setCounter(counter - 1), 1000);

    return () => clearTimeout(timer);
  }, [counter, startTime]);

  return counter;
};

export default useTimer;
