import React from 'react';

import createGrid from './createCrid';

function Grid(props) {
  const grid = createGrid(props.size);
  return (
    <div>
      {grid.rows.map((row, index) => (
        <div key={`row-${index}`}>
          {row.map(cell => (
            <span key={cell} data-testid="cell">{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;