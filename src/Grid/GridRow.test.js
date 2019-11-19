import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"

import GridRow from "./GridRow";
import { sel } from '../utils/tests';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

it('renders without crashing', () => {
  act(() => {
    render(<GridRow cells={[]} />, container);
  });
});

it('renders cells', () => {
  const cellsAmount = 10;
  act(() => {
    render(
      <GridRow cells={Array(cellsAmount).fill({})} />,
      container
    );
  });

  expect(container.querySelectorAll(sel('cell'))).toHaveLength(cellsAmount);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});