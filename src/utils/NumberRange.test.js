import NumberRange from './NumberRange';

it('contains() lower boundry', () => {
  const r = new NumberRange(0, 3);

  expect(r.contains(0)).to.equal(true);
  expect(r.contains(-1)).to.equal(false);
});

it('contains() higher boundry', () => {
  const r = new NumberRange(0, 3);

  expect(r.contains(3)).to.equal(true);
  expect(r.contains(4)).to.equal(false);
});