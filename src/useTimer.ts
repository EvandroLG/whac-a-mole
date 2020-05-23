import { useState, useEffect, useCallback } from 'react';

const useTimer = (startTime: number) => {
  const [counter, setCounter] = useState(startTime);
  const [start, setStart] = useState(false);
  const startCounter = useCallback(() => {
    setStart(true);
    setCounter(startTime);
  }, [startTime]);

  useEffect(() => {
    if (!start) {
      return;
    }

    const timer = setInterval(() => {
      if (counter === 0) {
        clearInterval(timer);
        setStart(false);
      } else {
        setCounter(counter - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, startTime, start]);

  return [counter, startCounter] as const;
};

export default useTimer;
