import { useState, useEffect, useCallback } from 'react';

const useTimer = (startTime: number) => {
  const [counter, setCounter] = useState(startTime);
  const restartCounter = useCallback(() => {
    setCounter(startTime);
  }, [startTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      counter === 0 ? clearInterval(timer) : setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, startTime]);

  return [counter, restartCounter] as const;
};

export default useTimer;
