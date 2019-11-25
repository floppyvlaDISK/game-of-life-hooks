import Cell from './Cell';
import NumberRange from './NumberRange';

export default class GameOfLife {
  constructor(grid) {
    this._grid = grid;
  }

  // TODO: Change this to specify that grid is created from cell states not cells themselves
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
      this._calcNextCellsGeneration()
    );
  }

  static _createGridFromCells(arraysOfCells) {
    return arraysOfCells.reduce(
      (result, rowOfCellStates, x) => {
        const rowOfCells = rowOfCellStates.map(
          (cellState, y) => new Cell(cellState, x, y)
        );
        return [...result, rowOfCells];
      },
      []
    );
  }

  static _createGridFromSize(size) {
    let result = [];
    for (let x = 0; x < size; x++) {
      let rowOfCells = [];
      for (let y = 0; y < size; y++) {
        rowOfCells.push(new Cell(Cell.getRandomState(), x, y));
      }
      result.push(rowOfCells);
    }
    return result;
  }

  _calcNextCellsGeneration() {
    return this.grid.reduce(
      (result, rowOfCells) => {
        const rowOfCellsNextStates = rowOfCells.map(
          aCell => this._calculateNextStateFor(aCell)
        );
        return [...result, rowOfCellsNextStates];
      },
      []
    );
  }

  _calculateNextStateFor(aCell) {
    const aliveNeighbors = this._getAliveNeighborsFor(aCell);

    if (new NumberRange(0, 1).contains(aliveNeighbors)) {
      return Cell.STATE_DEAD;
    }
    if (
      aCell.state === Cell.STATE_ALIVE
      && new NumberRange(2, 3).contains(aliveNeighbors)
    ) {
      return Cell.STATE_ALIVE;
    }
    if (
      aCell.state === Cell.STATE_DEAD
      && new NumberRange(3, 3).contains(aliveNeighbors)
    ) {
      return Cell.STATE_ALIVE;
    }
    return Cell.STATE_DEAD;
  }

  _getAliveNeighborsFor(aCell) {
    return this._getNeighborsFor(aCell)
      .reduce(
        (result, aCell) => {
          if (aCell.state === Cell.STATE_ALIVE) {
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