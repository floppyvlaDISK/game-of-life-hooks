import { useState, useEffect } from 'react';

import GameOfLife from '../utils/GameOfLife';

export default function useGameOfLife(size) {
  const [isGameOn, setIsGameOn] = useState(false);
  const [theGame] = useState(GameOfLife.createFromSize(size));

  return {
    grid: theGame.grid,
    isGameOn,
    toggleIsGameOn,
    resetGame: () => setIsGameOn(false),
  };

  function toggleIsGameOn() {
    setIsGameOn(!isGameOn);
    theGame.next();
  }
}