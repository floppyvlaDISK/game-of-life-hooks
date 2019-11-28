import { renderHook, act } from '@testing-library/react-hooks';

import GameOfLife from '../utils/GameOfLife';
import useGameOfLife, { STEP_INTERVAL_IN_MS } from './useGameOfLife';

let nextSpy;
beforeEach(() => {
  jest.useFakeTimers();
  nextSpy = jest.spyOn(GameOfLife.prototype, 'next');
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
    result.current.resetGame();
  });

  expect(result.current.isGameOn).toBe(false);
});

it('calls next() on isGameOn set to true', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  act(() => {
    result.current.toggleIsGameOn();
  });

  expect(nextSpy).toHaveBeenCalledTimes(1);
});

it('does not call next() on isGameOn set to false', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  act(() => {
    result.current.toggleIsGameOn();
    result.current.toggleIsGameOn();
  });

  expect(nextSpy).toHaveBeenCalledTimes(1);
})

it('sets interval to call next() every second on isGameOn set to true', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  act(() => {
    result.current.toggleIsGameOn();
    jest.advanceTimersByTime(STEP_INTERVAL_IN_MS * 3);
  });

  expect(nextSpy).toHaveBeenCalledTimes(4);
});

it('does not call next() after interval on isGameOn set to false', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  act(() => {
    result.current.toggleIsGameOn();
    jest.advanceTimersByTime(STEP_INTERVAL_IN_MS / 2);
    result.current.toggleIsGameOn();
    jest.advanceTimersByTime(STEP_INTERVAL_IN_MS / 2);
  });

  expect(nextSpy).toHaveBeenCalledTimes(1);
})