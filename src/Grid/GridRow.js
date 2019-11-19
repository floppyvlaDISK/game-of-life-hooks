import React from 'react';
import styled from 'styled-components';

import { CELL_STATES } from './CONST';
import GridCell from './GridCell';

const GridCellsWrapper = styled.div`
  display: flex;
  justifyContent: center;
`;

function GridRow(props) {
  return (
    <GridCellsWrapper>
      {props.cells.map((_cell, index) => (
        <GridCell
          key={index}
          cellState={
            Math.random() > 0.5 ? CELL_STATES.dead : CELL_STATES.alive
          }
        />
      ))}
    </GridCellsWrapper>
  );
}

export default GridRow;