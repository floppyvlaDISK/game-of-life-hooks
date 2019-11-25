import { CELL_STATES } from "../Grid/CONST";

export default class Cell {
  constructor(state) {
    this._state = state || 0;
  }

  static getRandomState() {
    return Math.random() > 0.5 ? CELL_STATES.dead : CELL_STATES.alive;
  }

  get state() {
    return this._state;
  }
}