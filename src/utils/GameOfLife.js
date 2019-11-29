import Cell from './Cell';
import Grid from './Grid';

export default class GameOfLife {
  constructor(grid) {
    this._grid = grid;
  }

  static createFromCellStatesGrid(cellStatesGrid) {
    return new this(GameOfLife._mapStatesToCells(cellStatesGrid));
  }

  static createFromSize(size) {
    return new this(GameOfLife._mapStatesToCells(
      GameOfLife._createGridOfRandomCellStates(size)
    ));
  }

  static _mapStatesToCells(cellStatesGrid) {
    return cellStatesGrid.reduce(
      (result, rowOfCellStates, x) => {
        const rowOfCells = rowOfCellStates.map(
          (cellState, y) => new Cell(cellState, x, y)
        );
        return [...result, rowOfCells];
      },
      []
    );
  }

  static _createGridOfRandomCellStates(size) {
    return Array(size).fill(0).map(_row => {
      return Array(size).fill(0).map(_cell => Cell.getRandomState());
    });
  }

  get grid() {
    return this._grid;
  }

  next() {
    this._grid = GameOfLife._mapStatesToCells(
      this._calcNextGridOfCellStates()
    );
  }

  clear() {
    this._grid = GameOfLife._mapStatesToCells(
      this._calcGridOfDeadCellStates()
    );
  }

  _calcNextGridOfCellStates() {
    return this._calcGridOfCellStates(
      aCell => this._calcNextStateFor(aCell)
    );
  }

  _calcGridOfDeadCellStates() {
    return this._calcGridOfCellStates(
      _ => Cell.STATE_DEAD,
    );
  }

  _calcGridOfCellStates(mapCellState) {
    return this._grid.reduce(
      (result, rowOfCells) => {
        const rowOfCellsNextStates = rowOfCells.map(mapCellState);
        return [...result, rowOfCellsNextStates];
      },
      []
    );
  }

  _calcNextStateFor(aCell) {
    const aliveNeighbors = this._getAliveNeighborsFor(aCell);
    return aCell.calculateNextState(aliveNeighbors);
  }

  _getAliveNeighborsFor(aCell) {
    return this._getNeighborsFor(aCell)
      .filter(aCell => aCell.state === Cell.STATE_ALIVE)
      .length;
  }

  _getNeighborsFor(aCell) {
    const aGrid = new Grid(this._grid);
    return aGrid.getNeighborsFor(aCell.x, aCell.y);
  }
}