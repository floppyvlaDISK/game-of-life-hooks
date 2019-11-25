import styled from 'styled-components';

import Cell from '../utils/Cell';

const GridCell = styled.span.attrs({
  'data-testid': 'cell',
})`
  width: 100px;
  height: 100px;
  display: inline-block;
  margin-left: 5px;
  margin-bottom: 5px;
  background-color: ${props => pickColorBasedOn(props.cellState)}
`;

function pickColorBasedOn(cellState) {
  return cellState === Cell.STATE_ALIVE
    ? 'papayawhip'
    : 'palevioletred';
}

export default GridCell;