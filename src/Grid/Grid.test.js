import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"

import Grid from "./Grid";
import { sel } from '../utils/tests';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

it('renders without crashing', () => {
  act(() => {
    render(<Grid grid={[]} />, container);
  });
});

it('renders cells based on size prop', () => {
  const size = 5;
  act(() => {
    render(
      <Grid
        grid={[
          { cells: ["0-0", "0-1", "0-2", "0-3", "0-4"] },
          { cells: ["1-0", "1-1", "1-2", "1-3", "1-4"] },
          { cells: ["2-0", "2-1", "2-2", "2-3", "2-4"] },
          { cells: ["3-0", "3-1", "3-2", "3-3", "3-4"] },
          { cells: ["4-0", "4-1", "4-2", "4-3", "4-4"] },
        ]}
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