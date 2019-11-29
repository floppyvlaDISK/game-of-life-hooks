import { useState, useEffect } from 'react';

import GameOfLife from '../utils/GameOfLife';

export const STEP_INTERVAL_IN_MS = 500;

export default function useGameOfLife(size) {
  const [isGameOn, setIsGameOn] = useState(false);
  const [theGame, setTheGame] = useState(GameOfLife.createFromSize(size));
  const [, setGrid] = useState(theGame.grid);

  useEffect(() => {
    next();
    return scheduleNext();

    function next() {
      if (isGameOn) {
        theGame.next();
        setGrid(theGame.grid);
      }
    }
    function scheduleNext() {
      let id;
      if (isGameOn) {
        id = setInterval(next, 500);
      }
      return () => clearInterval(id);
    }
  }, [isGameOn, theGame]);

  return {
    grid: theGame.grid,
    isGameOn,
    toggleIsGameOn,
    resetGame,
    clearGame,
    // TODO: Implement manual next() calling, disable if game is on
  };

  function toggleIsGameOn() {
    setIsGameOn(!isGameOn);
  }
  function resetGame() {
    setIsGameOn(false);
    setTheGame(GameOfLife.createFromSize(size));
  }
  function clearGame() {
    setIsGameOn(false);
    theGame.clear();
    setGrid(theGame.grid);
  }
}