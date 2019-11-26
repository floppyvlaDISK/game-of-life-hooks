import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from './App';
import { sel } from '../utils/tests';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

it('renders without crashing', () => {
  act(() => {
    render(<App />, container);
  });
});

it('changes button text on game toggle', () => {
  act(() => {
    render(<App />, container);
  });

  expect(getGameToggler().textContent).toBe('Start');

  act(() => {
    getGameToggler().dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(getGameToggler().textContent).toBe('Pause');
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

function getGameToggler() {
  return container.querySelector(sel('game-toggler'));
}