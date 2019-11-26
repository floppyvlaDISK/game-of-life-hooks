import Coordinate from "./Coordinate";
import NumberRange from "./NumberRange";

export default class Cell {
  constructor(state, x, y) {
    this._state = state || 0;
    this._aCoordinate = new Coordinate(x, y);
  }

  static STATE_ALIVE = 'alive'
  static STATE_DEAD = 'dead';

  static getRandomState() {
    return Math.random() > 0.5 ? Cell.STATE_DEAD : Cell.STATE_ALIVE;
  }

  get state() {
    return this._state;
  }

  get x() {
    return this._aCoordinate.x;
  }

  get y() {
    return this._aCoordinate.y;
  }

  calculateNextState(aliveNeighbors) {
    if (new NumberRange(0, 1).contains(aliveNeighbors)) {
      return Cell.STATE_DEAD;
    }
    if (
      this._state === Cell.STATE_ALIVE
      && new NumberRange(2, 3).contains(aliveNeighbors)
    ) {
      return Cell.STATE_ALIVE;
    }
    if (
      this._state === Cell.STATE_DEAD
      && new NumberRange(3, 3).contains(aliveNeighbors)
    ) {
      return Cell.STATE_ALIVE;
    }
    return Cell.STATE_DEAD;
  }
}