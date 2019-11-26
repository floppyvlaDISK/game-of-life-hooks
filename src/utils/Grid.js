export default class Grid {
  constructor(grid) {
    this._grid = grid || [];
  }

  at(x, y) {
    return (this._grid[x] || [])[y];
  }

  getNeighborsFor(x, y) {
    return [
      this.at(x - 1, y - 1),
      this.at(x - 1, y),
      this.at(x - 1, y + 1),
      this.at(x, y - 1),
      this.at(x, y + 1),
      this.at(x + 1, y - 1),
      this.at(x + 1, y),
      this.at(x + 1, y + 1),
    ]
      .filter(Boolean);
  }
}