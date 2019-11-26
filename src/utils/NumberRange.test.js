import NumberRange from './NumberRange';

it('contains() lower boundry', () => {
  const r = new NumberRange(0, 3);

  expect(r.contains(0)).toBe(true);
  expect(r.contains(-1)).toBe(false);
});

it('contains() higher boundry', () => {
  const r = new NumberRange(0, 3);

  expect(r.contains(3)).toBe(true);
  expect(r.contains(4)).toBe(false);
});