import GameOfLife from './GameOfLife';

it('creates grid with random cells from size', () => {
  const g = GameOfLife.createFromSize(3);

  expect(g.grid).toHaveLength(3);
  expect(g.grid[0]).toHaveLength(3);
});

it('creates grid from array of cell values', () => {
  const g = GameOfLife.createFromCells(
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, 0]
    ]
  );

  expect(g.grid).toHaveLength(3);
  expect(g.grid[0]).toHaveLength(3);
});