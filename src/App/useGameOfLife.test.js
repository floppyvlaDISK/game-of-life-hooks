import { renderHook, act } from '@testing-library/react-hooks';

import GameOfLife from '../utils/GameOfLife';
import useGameOfLife from './useGameOfLife';

let spy;
beforeEach(() => {
  spy = jest.spyOn(GameOfLife.prototype, 'next');
});

afterEach(() => {
  jest.restoreAllMocks();
});

it('generates board of size n', () => {
  const n = 3;
  const { result } = renderHook(() => useGameOfLife(n));

  expect(result.current.grid).toHaveLength(n);
  expect(result.current.grid[0]).toHaveLength(n);
});

it('toggles isGameOn', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  expect(result.current.isGameOn).toBe(false);

  act(() => {
    result.current.toggleIsGameOn();
  });

  expect(result.current.isGameOn).toBe(true);
});

it('resets isGameOn', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  act(() => {
    result.current.toggleIsGameOn();
  });
  act(() => {
    result.current.resetGame();
  });

  expect(result.current.isGameOn).toBe(false);
});

it('goes to next game generation on isGameOn set to true', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  act(() => {
    result.current.toggleIsGameOn();
  });

  expect(spy).toHaveBeenCalledTimes(1);
});

it.skip('sets interval to next game generation on isGameOn set to true', () => {

});