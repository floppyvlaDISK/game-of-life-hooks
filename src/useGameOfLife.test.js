import { renderHook, act } from '@testing-library/react-hooks';
import useGameOfLife from './useGameOfLife';

it('should update cells on next step', () => {
  const { result } = renderHook(() => useGameOfLife(3));

  act(() => {});
});