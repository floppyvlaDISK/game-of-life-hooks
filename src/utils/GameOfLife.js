import Cell from './Cell';
import Grid from './Grid';

export default class GameOfLife {
  constructor(grid) {
    this._grid = grid;
  }

  static createFromCellStatesGrid(cellStatesGrid) {
    return new this(GameOfLife._mapCellStatesToTheCells(cellStatesGrid));
  }

  static createFromSize(size) {
    return new this(GameOfLife._mapRandomCellStatesToTheCells(size));
  }

  get grid() {
    return this._grid;
  }

  next() {
    this._grid = GameOfLife._mapCellStatesToTheCells(
      this._calcNextCellStatesGrid()
    );
  }

  clear() {
    this._grid = GameOfLife._mapCellStatesToTheCells(
      this._setAllCellStatesToDead()
    );
  }

  static _mapCellStatesToTheCells(cellStatesGrid) {
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

  static _mapRandomCellStatesToTheCells(size) {
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

  _calcNextCellStatesGrid() {
    return this._grid.reduce(
      (result, rowOfCells) => {
        const rowOfCellsNextStates = rowOfCells.map(
          aCell => this._calculateNextStateFor(aCell)
        );
        return [...result, rowOfCellsNextStates];
      },
      []
    );
  }

  _setAllCellStatesToDead() {
    return this._grid.reduce(
      (result, rowOfCells) => {
        const rowOfDeadCells = rowOfCells.map(
          _ => Cell.STATE_DEAD,
        );
        return [...result, rowOfDeadCells];
      },
      []
    );
  }

  _calculateNextStateFor(aCell) {
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