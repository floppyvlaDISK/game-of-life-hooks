import React from 'react';

import { GameBoard } from '../GameBoard';
import { Button } from '../Button';
import AppContentWrapper from './AppContentWrapper';
import useGameOfLife from './useGameOfLife';

function App() {
  const {
    grid,
    isGameOn,
    toggleIsGameOn,
    resetGame,
    clearGame,
  } = useGameOfLife(50);
  return (
    <AppContentWrapper>
      <GameBoard grid={grid} />
      <Button onClick={toggleIsGameOn} data-testid="game-toggle-button">
        {isGameOn ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={resetGame} secondary data-testid="game-reset-button">
        Reset
      </Button>
      <Button onClick={clearGame}>Clear</Button>
    </AppContentWrapper>
  );
}

export default App;
