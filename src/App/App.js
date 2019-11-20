import React from 'react';

import { Grid } from '../Grid';
import { Button } from '../Button';
import AppWrapper from './AppWrapper';

function App() {
  return (
    <AppWrapper>
      <Grid size={5} />
      <Button>Start</Button>
    </AppWrapper>
  );
}

export default App;
