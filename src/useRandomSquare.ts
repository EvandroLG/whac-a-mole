import { useState, useEffect } from 'react';
import { compose } from 'ramda';

const getRandomSquare = compose(Math.floor, () => Math.random() * 9);

const useRandomSquare = () => {
  const [square, setSquare] = useState(getRandomSquare());

  useEffect(() => {
    setInterval(() => setSquare(getRandomSquare()), 1000);
  }, []);

  return square;
};

export default useRandomSquare;
