import Cell from './Cell';

it('calculateNextState() for alive cell', () => {
  const c = new Cell(Cell.STATE_ALIVE, 0, 0);

  expect(c.calculateNextState(1)).toBe(Cell.STATE_DEAD);
  expect(c.calculateNextState(2)).toBe(Cell.STATE_ALIVE);
  expect(c.calculateNextState(3)).toBe(Cell.STATE_ALIVE);
  expect(c.calculateNextState(4)).toBe(Cell.STATE_DEAD);
});

it('calculateNextState() for dead cell', () => {
  const c = new Cell(Cell.STATE_DEAD, 0, 0);

  expect(c.calculateNextState(1)).toBe(Cell.STATE_DEAD);
  expect(c.calculateNextState(2)).toBe(Cell.STATE_DEAD);
  expect(c.calculateNextState(3)).toBe(Cell.STATE_ALIVE);
  expect(c.calculateNextState(4)).toBe(Cell.STATE_DEAD);
});