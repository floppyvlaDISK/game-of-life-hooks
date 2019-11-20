import React from 'react';

import { CELL_STATES } from './CONST';
import createGrid from './createCrid';
import GridRow from './GridRow';
import GridCell from './GridCell';

function Grid(props) {
  const grid = createGrid(props.size);
  return grid.rows.map((row, index) => (
    <GridRow
      cells={row.cells}
      key={index}
    >
      {row.cells.map((_cell, index) => (
        <GridCell
          key={index}
          cellState={
            Math.random() > 0.5 ? CELL_STATES.dead : CELL_STATES.alive
          }
        />
      ))}
    </GridRow>
  ));
}

export default Grid;