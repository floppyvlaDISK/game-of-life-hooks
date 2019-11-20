import React from 'react';

import { Grid } from '../Grid';
import { Button } from '../Button';
import AppWrapper from './AppWrapper';
import useGameOfLife from '../useGameOfLife';

function App() {
  const [grid, state, toggleState, resetState] = useGameOfLife(5);
  return (
    <AppWrapper>
      <Grid rows={grid.rows} />
      <Button onClick={toggleState}>
        {state === 0 ? 'Start' : 'Pause'}
      </Button>
      <Button onClick={resetState} secondary>
        Reset
      </Button>
    </AppWrapper>
  );
}

export default App;
