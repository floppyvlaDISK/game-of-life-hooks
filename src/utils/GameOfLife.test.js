import GameOfLife from './GameOfLife';
import Cell from './Cell';

it('creates grid with random cells from size', () => {
  const g = GameOfLife.createFromSize(3);

  expect(g.grid).toHaveLength(3);
  expect(g.grid[0]).toHaveLength(3);
});

it('creates grid from array of cell values', () => {
  const g = GameOfLife.createFromCells(
    [
      [Cell.STATE_DEAD, Cell.STATE_ALIVE, Cell.STATE_ALIVE],
      [Cell.STATE_ALIVE, Cell.STATE_ALIVE, Cell.STATE_DEAD],
      [Cell.STATE_DEAD, Cell.STATE_ALIVE, Cell.STATE_DEAD]
    ]
  );

  expect(g.grid).toHaveLength(3);
  expect(g.grid[0]).toHaveLength(3);
});

it('Any live cell with fewer than two live neighbours dies, as if by underpopulation.', () => {
  const g = GameOfLife.createFromCells(
    [
      [Cell.STATE_DEAD, Cell.STATE_DEAD, Cell.STATE_DEAD],
      [Cell.STATE_DEAD, Cell.STATE_ALIVE, Cell.STATE_DEAD],
      [Cell.STATE_DEAD, Cell.STATE_DEAD, Cell.STATE_DEAD],
    ]
  );

  expect(g.grid[1][1].state).toBe(Cell.STATE_ALIVE);

  g.next();

  expect(g.grid[1][1].state).toBe(Cell.STATE_DEAD);
});

it('Any live cell with two live neighbours lives on to the next generation', () => {
  const g = GameOfLife.createFromCells(
    [
      [Cell.STATE_ALIVE, Cell.STATE_ALIVE, Cell.STATE_DEAD],
      [Cell.STATE_DEAD, Cell.STATE_ALIVE, Cell.STATE_DEAD],
      [Cell.STATE_DEAD, Cell.STATE_DEAD, Cell.STATE_DEAD],
    ]
  );

  expect(g.grid[1][1].state).toBe(Cell.STATE_ALIVE);

  g.next();

  expect(g.grid[1][1].state).toBe(Cell.STATE_ALIVE);
});

it('Any live cell with three live neighbours lives on to the next generation', () => {
  const g = GameOfLife.createFromCells(
    [
      [Cell.STATE_ALIVE, Cell.STATE_DEAD, Cell.STATE_DEAD],
      [Cell.STATE_DEAD, Cell.STATE_ALIVE, Cell.STATE_DEAD],
      [Cell.STATE_ALIVE, Cell.STATE_DEAD, Cell.STATE_ALIVE],
    ]
  );

  expect(g.grid[1][1].state).toBe(Cell.STATE_ALIVE);

  g.next();

  expect(g.grid[1][1].state).toBe(Cell.STATE_ALIVE);
});

it('Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
  const g = GameOfLife.createFromCells(
    [
      [Cell.STATE_ALIVE, Cell.STATE_DEAD, Cell.STATE_ALIVE],
      [Cell.STATE_DEAD, Cell.STATE_ALIVE, Cell.STATE_DEAD],
      [Cell.STATE_ALIVE, Cell.STATE_DEAD, Cell.STATE_ALIVE],
    ]
  );

  expect(g.grid[1][1].state).toBe(Cell.STATE_ALIVE);

  g.next();

  expect(g.grid[1][1].state).toBe(Cell.STATE_DEAD);
});

it('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
  const g = GameOfLife.createFromCells(
    [
      [Cell.STATE_ALIVE, Cell.STATE_DEAD, Cell.STATE_ALIVE],
      [Cell.STATE_DEAD, Cell.STATE_DEAD, Cell.STATE_DEAD],
      [Cell.STATE_ALIVE, Cell.STATE_DEAD, Cell.STATE_DEAD],
    ]
  );

  expect(g.grid[1][1].state).toBe(Cell.STATE_DEAD);

  g.next();

  expect(g.grid[1][1].state).toBe(Cell.STATE_ALIVE);
});