import Cell from './Cell';
import { CELL_STATES } from '../Grid/CONST';

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

  get grid() {
    return this._grid;
  }

  next() {
    const arrayOfCells = this._calcNextGenerationStates();
    this._grid = GameOfLife._createGridFromCells(arrayOfCells);
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

  // TODO: introduce object parameter for (row, col)?
  _calculateCellNextStateFor(row, col) {
    const aliveNeighbors = this._getAliveNeighborsFor(row, col);

    // TODO: NumberRange class!
    if (aliveNeighbors < 2) {
      return CELL_STATES.dead;
    }
    if (
      this.grid[row][col].state === CELL_STATES.alive
      && aliveNeighbors >= 2
      && aliveNeighbors <= 3
    ) {
      return CELL_STATES.alive;
    }
    if (
      this.grid[row][col].state === CELL_STATES.dead
      && aliveNeighbors === 3
    ) {
      return CELL_STATES.alive;
    }
    return CELL_STATES.dead;
  }

  _getAliveNeighborsFor(row, col) {
    return this._getNeighborsFor(row, col)
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

  _getNeighborsFor(row, col) {
    return [
      (this.grid[row - 1] || [])[col - 1],
      (this.grid[row - 1] || [])[col],
      (this.grid[row - 1] || [])[col + 1],

      this.grid[row][col - 1],
      this.grid[row][col + 1],

      (this.grid[row + 1] || [])[col - 1],
      (this.grid[row + 1] || [])[col],
      (this.grid[row + 1] || [])[col + 1],
    ]
      .filter(Boolean);
  }
}