export default class Grid {
  constructor(grid) {
    this._grid = grid || [];
  }

  getNeighborsFor(x, y) {
    return [
      this._at(x - 1, y - 1),
      this._at(x - 1, y),
      this._at(x - 1, y + 1),
      this._at(x, y - 1),
      this._at(x, y + 1),
      this._at(x + 1, y - 1),
      this._at(x + 1, y),
      this._at(x + 1, y + 1),
    ]
      .filter(v => typeof v !== 'undefined');
  }

  _at(x, y) {
    return (this._grid[x] || [])[y];
  }
}