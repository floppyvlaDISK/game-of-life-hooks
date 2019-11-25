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
    this._grid = GameOfLife._createGridFromCells(
      this._calcNextGenerationCellsStates()
    );
  }

  static _createGridFromCells(arraysOfCells) {
    let result = [];
    for (let row = 0; row < arraysOfCells.length; row++) {
      let cellsForRow = [];
      for (let col = 0; col < arraysOfCells[row].length; col++) {
        cellsForRow.push(
          new Cell(arraysOfCells[row][col], row, col)
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
          new Cell(Cell.getRandomState(), row, col),
        );
      }
      result.push(cellsForRow);
    }
    return result;
  }

  _calcNextGenerationCellsStates() {
    let result = [];
    for (let row = 0; row < this.grid.length; row++) {
      let cellValuesForRow = [];
      for (let col = 0; col < this.grid[row].length; col++) {
        cellValuesForRow.push(
          this._calculateCellNextStateFor(this.grid[row][col])
        );
      }
      result.push(cellValuesForRow);
    }
    return result;
  }

  _calculateCellNextStateFor(aCell) {
    const aliveNeighbors = this._getAliveNeighborsFor(aCell);

    // TODO: NumberRange class!
    if (aliveNeighbors < 2) {
      return CELL_STATES.dead;
    }
    if (
      aCell.state === CELL_STATES.alive
      && aliveNeighbors >= 2
      && aliveNeighbors <= 3
    ) {
      return CELL_STATES.alive;
    }
    if (
      aCell.state === CELL_STATES.dead
      && aliveNeighbors === 3
    ) {
      return CELL_STATES.alive;
    }
    return CELL_STATES.dead;
  }

  _getAliveNeighborsFor(aCell) {
    return this._getNeighborsFor(aCell)
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

  _getNeighborsFor(aCell) {
    return [
      (this.grid[aCell.x - 1] || [])[aCell.y - 1],
      (this.grid[aCell.x - 1] || [])[aCell.y],
      (this.grid[aCell.x - 1] || [])[aCell.y + 1],

      this.grid[aCell.x][aCell.y - 1],
      this.grid[aCell.x][aCell.y + 1],

      (this.grid[aCell.x + 1] || [])[aCell.y - 1],
      (this.grid[aCell.x + 1] || [])[aCell.y],
      (this.grid[aCell.x + 1] || [])[aCell.y + 1],
    ]
      .filter(Boolean);
  }
}