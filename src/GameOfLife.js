import Cell from './Cell';
import { CELL_STATES } from './Grid/CONST';

export default class GameOfLife {
  constructor(grid) {
    this._grid = grid;
  }

  static createFromCells(arraysOfCells) {
    return new this(GameOfLife._createGridFromCells(arraysOfCells));
  }

  static createFromSize(size) {
    return new this(GameOfLife._createGridFromSize(size));
  }

  static _createGridFromCells(arraysOfCells) {
    let result = [];
    for (let row = 0; row < arraysOfCells.length; row++) {
      let cellsForRow = [];
      for (let col = 0; col < arraysOfCells[row].length; col++) {
        cellsForRow.push(
          new Cell(arraysOfCells[row][col])
        );
      }
      result.push(cellsForRow);
    }
    return result;
  }

  static _createGridFromSize(size) {
    let result = [];
    for (let row = 0; row < size; row++) {
      let cellsForRow = [];
      for (let col = 0; col < size; col++) {
        cellsForRow.push(
          new Cell(Cell.getRandomState()),
        );
      }
      result.push(cellsForRow);
    }
    return result;
  }

  get grid() {
    return this._grid;
  }

  next() {
    const arrayOfCells = this._calcNextGenerationStates();
    this._grid = GameOfLife._createGridFromCells(arrayOfCells);
  }

  _calcNextGenerationStates() {
    let result = [];
    for (let row = 0; row < this.grid.length; row++) {
      let cellValuesForRow = [];
      for (let col = 0; col < this.grid[row].length; col++) {
        cellValuesForRow.push(this._calculateCellNextStateFor(row, col));
      }
      result.push(cellValuesForRow);
    }
    return result;
  }

  _calculateCellNextStateFor(row, col) {
    const aliveNeighbors = this._getAliveNeighborsFor(row, col);
    // NumberRange class!
    if (aliveNeighbors < 2) {
      return CELL_STATES.dead;
    }
    if (aliveNeighbors >= 2 && aliveNeighbors <= 3) {
      return CELL_STATES.alive;
    }
    return CELL_STATES.dead;
  }

  _getAliveNeighborsFor(row, cell) {
    return this._getNeighborsFor(row, cell)
      .filter(Boolean)
      .reduce(
        (result, aCell) => {
          if (aCell.state === CELL_STATES.alive) {
            result += 1;
          }
          return result;
        },
        0,
      );
  }

  _getNeighborsFor(row, cell) {
    return [
      (this._grid[row - 1] || [])[cell - 1],
      (this._grid[row - 1] || [])[cell],
      (this._grid[row - 1] || [])[cell + 1],

      this._grid[row][cell - 1],
      this._grid[row][cell + 1],

      (this._grid[row + 1] || [])[cell - 1],
      (this._grid[row + 1] || [])[cell],
      (this._grid[row + 1] || [])[cell - 1],
    ];
  }
}