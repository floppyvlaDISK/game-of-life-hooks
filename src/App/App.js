import React from 'react';

import { Grid } from '../Grid';
import { Button } from '../Button';
import AppWrapper from './AppWrapper';
import useGameOfLife from '../useGameOfLife';

function App() {
  const [grid, toggleStartPause] = useGameOfLife(7);
  return (
    <AppWrapper>
      <Grid rows={grid.rows} />
      <Button onClick={toggleStartPause}>Start</Button>
    </AppWrapper>
  );
}

export default App;
