import React from 'react';
import useCounter from './useCounter';
import './App.css';

function App() {
  const [counter, set] = useCounter(999);
  return (
    <div className="App" onClick={() => set(counter + 1)}>
      {counter}
    </div>
  );
}

export default App;
