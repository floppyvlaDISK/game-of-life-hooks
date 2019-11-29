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
    nextGameGeneration,
  } = useGameOfLife(50);
  return (
    <AppContentWrapper>
      <GameBoard grid={grid} />
      <Button
        secondary
        data-testid="game-next-gen-button"
        onClick={nextGameGeneration}
      >
        Next Gen
      </Button>
      <Button
        onClick={toggleIsGameOn}
        data-testid="game-toggle-button"
      >
        {isGameOn ? 'Pause' : 'Start'}
      </Button>
      <Button
        secondary
        onClick={resetGame}
        data-testid="game-reset-button"
      >
        Reset
      </Button>
      <Button onClick={clearGame}>
        Clear
      </Button>
    </AppContentWrapper>
  );
}

export default App;
