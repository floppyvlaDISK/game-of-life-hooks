import { useState, useEffect } from 'react';

import GameOfLife from '../utils/GameOfLife';

export default function useGameOfLife(size) {
  const [isGameOn, setIsGameOn] = useState(false);
  const [theGame] = useState(GameOfLife.createFromSize(size));

  useEffect(() => {
    next();
    const id = setInterval(next, 1000);
    return () => clearInterval(id);

    function next() {
      if (isGameOn) {
        theGame.next();
      }
    }
  }, [isGameOn, theGame]);

  return {
    grid: theGame.grid,
    isGameOn,
    toggleIsGameOn,
    resetGame,
  };

  function toggleIsGameOn() {
    setIsGameOn(!isGameOn);
  }
  function resetGame() {
    setIsGameOn(false);
  }
}