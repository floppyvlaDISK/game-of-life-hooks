import React from 'react';

import { CELL_STATES } from './CONST';
import GridCell from './GridCell';

function GridRow(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {props.cells.map((_cell, index) => (
        <GridCell
          key={index}
          cellState={
            Math.random() > 0.5 ? CELL_STATES.dead : CELL_STATES.alive
          }
        />
      ))}
    </div>
  );
}

export default GridRow;