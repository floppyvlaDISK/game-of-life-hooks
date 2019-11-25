import { CELL_STATES } from "../Grid/CONST";
import Coordinate from "./Coordinate";

export default class Cell {
  constructor(state, x, y) {
    this._state = state || 0;
    this._aCoordinate = new Coordinate(x, y);
  }

  static getRandomState() {
    return Math.random() > 0.5 ? CELL_STATES.dead : CELL_STATES.alive;
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