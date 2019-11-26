import React from 'react';

import GameBoardRow from './GameBoardRow';
import GameBoardCell from './GameBoardCell';

function GameBoard(props) {
  return props.grid.map((row, index) => (
    <GameBoardRow
      cells={row.cells}
      key={index}
    >
      {row.map((cell, index) => (
        <GameBoardCell
          key={index}
          cellState={cell.state}
        />
      ))}
    </GameBoardRow>
  ));
}

export default GameBoard;