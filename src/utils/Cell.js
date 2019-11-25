import Coordinate from "./Coordinate";

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
}