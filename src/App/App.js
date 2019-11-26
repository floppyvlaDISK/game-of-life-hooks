import React from 'react';

import { Grid } from '../Grid';
import { Button } from '../Button';
import AppWrapper from './AppWrapper';
import useGameOfLife from '../useGameOfLife';

function App() {
  const [grid, isGameOn, toggleIsGameOn, resetGame] = useGameOfLife(50);
  return (
    <AppWrapper>
      <Grid grid={grid} />
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
