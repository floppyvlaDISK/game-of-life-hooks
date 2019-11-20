import React from 'react';

import './App.css';
import { Grid } from '../Grid';
import { Button } from '../Button';

function App() {
  return (
    <div className="App">
      <Grid size={5} />
      <Button>Start</Button>
    </div>
  );
}

export default App;
