import React from 'react';

import { GameBoard } from '../GameBoard';
import { Button } from '../Button';
import AppWrapper from './AppWrapper';
import useGameOfLife from '../useGameOfLife';

function App() {
  const [grid, isGameOn, toggleIsGameOn, resetGame] = useGameOfLife(50);
  return (
    <AppWrapper>
      <GameBoard grid={grid} />
      <Button onClick={toggleIsGameOn}>
        {isGameOn ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={resetGame} secondary>
        Reset
      </Button>
    </AppWrapper>
  );
}

export default App;
