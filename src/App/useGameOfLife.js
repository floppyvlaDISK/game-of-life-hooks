import { useState, useEffect } from 'react';

import GameOfLife from '../utils/GameOfLife';

export const STEP_INTERVAL_IN_MS = 500;

export default function useGameOfLife(size) {
  const [isGameOn, setIsGameOn] = useState(false);
  const [theGame] = useState(GameOfLife.createFromSize(size));
  const [grid, setGrid] = useState(theGame.grid);

  useEffect(() => {
    next();
    let id;
    if (isGameOn) {
      id = setInterval(next, 500);
    }
    return () => clearInterval(id);

    function next() {
      if (isGameOn) {
        theGame.next();
        setGrid(theGame.grid);
      }
    }
  }, [isGameOn, theGame]);

  return {
    grid,
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