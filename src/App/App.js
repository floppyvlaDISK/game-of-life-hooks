import React, { useState } from 'react';

import './App.css';

function App() {
  const [counter, set] = useState(999);
  return (
    <div className="App" onClick={() => set(counter + 1)}>
      {counter}
    </div>
  );
}

export default App;
