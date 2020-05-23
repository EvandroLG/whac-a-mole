import { useState, useRef, useCallback } from 'react';
import { compose } from 'ramda';

const getRandomSquare = compose(Math.floor, () => Math.random() * 9);

const useRandomSquare = () => {
  const [square, setSquare] = useState(-1);
  const interval = useRef(0);

  const stopRandomSquare = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  const startRandomSquare = useCallback(() => {
    interval.current = window.setInterval(
      () => setSquare(getRandomSquare()),
      1000
    );
  }, []);

  return [square, startRandomSquare, stopRandomSquare] as const;
};

export default useRandomSquare;
