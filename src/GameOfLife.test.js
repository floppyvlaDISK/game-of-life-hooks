import GameOfLife from './GameOfLife';
import { CELL_STATES } from './Grid/CONST';

it('creates grid with random cells from size', () => {
  const g = GameOfLife.createFromSize(3);

  expect(g.grid).toHaveLength(3);
  expect(g.grid[0]).toHaveLength(3);
});

it('creates grid from array of cell values', () => {
  const g = GameOfLife.createFromCells(
    [
      [CELL_STATES.dead, CELL_STATES.alive, CELL_STATES.alive],
      [CELL_STATES.alive, CELL_STATES.alive, CELL_STATES.dead],
      [CELL_STATES.dead, CELL_STATES.alive, CELL_STATES.dead]
    ]
  );

  expect(g.grid).toHaveLength(3);
  expect(g.grid[0]).toHaveLength(3);
});