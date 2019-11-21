export default class GameOfLife {
  constructor(grid) {
    this._grid = grid;
  }

  static createFromCells(arraysOfCells) {
    return new this([]);
  }

  static createFromSize(aNumber) {
    return new this([]);
  }

  get grid() {
    return this._grid;
  }

  createRows() {

  }

  createCell() {

  }
}