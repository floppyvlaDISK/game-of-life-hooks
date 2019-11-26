import { renderHook, act } from '@testing-library/react-hooks';
import useGameOfLife from './useGameOfLife';

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