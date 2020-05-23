import { useState, useEffect, useRef, useCallback } from 'react';
import { compose } from 'ramda';

const getRandomSquare = compose(Math.floor, () => Math.random() * 9);

const useRandomSquare = () => {
  const [square, setSquare] = useState(getRandomSquare());
  const interval = useRef(0);
  const stopRandomSquare: () => void = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  useEffect(() => {
    interval.current = window.setInterval(
      () => setSquare(getRandomSquare()),
      1000
    );
  }, []);

  return [square, stopRandomSquare] as const;
};

export default useRandomSquare;
