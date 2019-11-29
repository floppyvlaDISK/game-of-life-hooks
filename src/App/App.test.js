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

  expect(getGameToggleButton().textContent).toBe('Start');

  act(() => {
    simulateGameToggleButtonClick();
  });

  expect(getGameToggleButton().textContent).toBe('Pause');
});

it('resets button text on game reset', () => {
  act(() => {
    render(<App />, container);
  });
  act(() => {
    simulateGameToggleButtonClick();
  });
  act(() => {
    simulateGameResetButtonClick();
  });

  expect(getGameToggleButton().textContent).toBe('Start');
});

it('pauses the game on "next generation" button click', () => {
  act(() => {
    render(<App />, container);
  });

  act(() => {
    simulateGameToggleButtonClick();
  });
  act(() => {
    simulateGameNextGenButtonClick();
  });

  expect(getGameToggleButton().textContent).toBe('Start');
});

afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

function getGameToggleButton() {
  return container.querySelector(sel('game-toggle-button'));
}
function getGameResetButton() {
  return container.querySelector(sel('game-reset-button'));
}
function simulateGameNextGenButtonClick() {
  simulateButtonClick(
    container.querySelector(sel('game-next-gen-button'))
  );
}
function simulateGameToggleButtonClick() {
  simulateButtonClick(getGameToggleButton());
}
function simulateGameResetButtonClick() {
  simulateButtonClick(getGameResetButton());
}
function simulateButtonClick(button) {
  button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
}