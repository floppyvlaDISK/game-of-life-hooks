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
    render(<Grid />, container);
  });
});

it('renders cells based on size prop', () => {
  const size = 5;
  act(() => {
    render(<Grid size={size} />, container);
  });

  expect(container.querySelectorAll(sel('cell'))).toHaveLength(size * size);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});