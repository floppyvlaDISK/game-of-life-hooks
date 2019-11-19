import React from 'react';

import createGrid from './createCrid';
import GridRow from './GridRow';

function Grid(props) {
  const grid = createGrid(props.size);
  return grid.rows.map((row, index) => (
    <GridRow
      cells={row.cells}
      key={index}
    />
  ));
}

export default Grid;