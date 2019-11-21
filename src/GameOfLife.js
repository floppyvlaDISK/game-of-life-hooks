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
          new Cell(Math.round(Math.random())),
        );
      }
      result.push(cellsForRow);
    }
    return result;
  }

  get grid() {
    return this._grid;
  }
}

class Cell {
  constructor(state) {
    this._state = state || 0;
  }
}