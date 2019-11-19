import styled from 'styled-components';

import { CELL_STATES } from './CONST';

const GridCell = styled.span.attrs({
  'data-testid': 'cell',
})`
  width: '100px',
  height: '100px',
  display: 'inline-block',
  margin-left: '5px',
  margin-bottom: '5px',
  background-color: ${props => pickColorBasedOn(props.cellState)}
`;

function pickColorBasedOn(cellState) {
  return cellState === CELL_STATES.alive
    ? 'papayawhip'
    : 'palevioletred';
}

export default GridCell;