import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import 'jest-styled-components'

import GridCell from './GridCell';
import { CELL_STATES } from './CONST';
import { sel } from '../utils/tests';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

it('renders without ctashing', () => {
  act(() => {
    render(<GridCell />, container);
  });
});

it('renders in "dead" state', () => {
  act(() => {
    render(
      <GridCell cellState={CELL_STATES.dead} />,
      container
    );
  });

  expect(container.querySelector(sel('cell')))
    .toHaveStyleRule('background-color: palevioletred');
});

it('rendres in "alive" state', () => {
  act(() => {
    render(
      <GridCell cellState={CELL_STATES.alive} />,
      container,
    );
  });

  expect(container.querySelector(sel('cell')))
    .toHaveStyleRule('background-color: papayawhip');
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});