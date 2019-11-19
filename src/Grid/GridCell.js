import React from 'react';
import { CELL_STATES } from './CONST';

function GridCell(props) {
  return (
    <span
      data-testid="cell"
      style={{
        width: '100px',
        height: '100px',
        display: 'inline-block',
        marginLeft: '5px',
        marginBottom: '5px',
        backgroundColor: pickColorBasedOnCellState()
      }}
    />
  );

  function pickColorBasedOnCellState() {
    console.log(props.cellState);
    return props.cellState === CELL_STATES.alive
      ? 'red'
      : 'black';
  }
}

export default GridCell;