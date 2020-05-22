import { useState, useEffect } from 'react';

const useTimer = (startTime: number) => {
  const [counter, setCounter] = useState(startTime);

  useEffect(() => {
    const timer = setInterval(() => {
      counter === 0 ? clearInterval(timer) : setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, startTime]);

  return counter;
};

export default useTimer;
