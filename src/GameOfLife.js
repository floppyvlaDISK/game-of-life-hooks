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
        cellValuesForRow.push(this.calculateCellNextState(row, col));
      }
      result.push(cellValuesForRow);
    }
    return result;
  }

  calculateCellNextState(row, col) {
    /* this.grid[row][col] =  */
    return CELL_STATES.dead;
  }
}