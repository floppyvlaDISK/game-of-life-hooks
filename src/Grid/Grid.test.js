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

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});