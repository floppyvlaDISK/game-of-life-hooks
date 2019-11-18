import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"

import Grid from "./Grid";

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
  act(() => {
    render(<Grid size={5} />, container);
  });

  expect(container.querySelectorAll('cell')).toHaveLength(25);
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});