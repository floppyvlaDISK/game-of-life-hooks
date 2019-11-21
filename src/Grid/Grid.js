import React from 'react';

import GridRow from './GridRow';
import GridCell from './GridCell';

function Grid(props) {
  return props.grid.map((row, index) => (
    <GridRow
      cells={row.cells}
      key={index}
    >
      {row.map((cell, index) => (
        <GridCell
          key={index}
          cellState={cell.state}
        />
      ))}
    </GridRow>
  ));
}

export default Grid;