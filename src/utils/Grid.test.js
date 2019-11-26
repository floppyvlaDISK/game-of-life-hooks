import Grid from './Grid';

it('getNeighborsFor()', () => {
  const g = new Grid([
    [1, 1, 1],
    [2, 0, 2],
    [3, 3, 3]
  ]);

  expect(g.getNeighborsFor(1, 1)).toStrictEqual([
    1, 1, 1,
    2,    2,
    3, 3, 3,
  ]);
  expect(g.getNeighborsFor(0, 0)).toStrictEqual([
       1,
    2, 0,
  ]);
  expect(g.getNeighborsFor(1, 2)).toStrictEqual([
    1, 1,
    0,
    3, 3
  ]);
  expect(g.getNeighborsFor(10, 10)).toStrictEqual([]);
});