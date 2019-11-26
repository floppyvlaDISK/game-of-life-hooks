import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"

import GameOfLife from '../utils/GameOfLife';
import GameBoard from "./GameBoard";
import { sel } from '../utils/tests';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

it('renders without crashing', () => {
  act(() => {
    render(<GameBoard grid={[]} />, container);
  });
});

it('renders cells based on size prop', () => {
  const size = 5;
  act(() => {
    render(
      <GameBoard
        grid={GameOfLife.createFromSize(5).grid}
      />,
      container
    );
  });

  expect(container.querySelectorAll(sel('cell'))).toHaveLength(size * size);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});