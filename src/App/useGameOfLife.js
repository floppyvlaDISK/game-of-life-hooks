import { useState, useEffect } from 'react';

import GameOfLife from '../utils/GameOfLife';

export default function useGameOfLife(size) {
  const [isGameOn, setIsGameOn] = useState(false);
  const [aGame] = useState(GameOfLife.createFromSize(size));

  return {
    grid: aGame.grid,
    isGameOn,
    toggleIsGameOn: () => setIsGameOn(!isGameOn),
  };
}