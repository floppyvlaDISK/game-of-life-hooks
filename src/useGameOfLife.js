import { useState, useEffect } from 'react';

import GameOfLife from './utils/GameOfLife';

export default function useGameOfLife(size) {
  return [GameOfLife.createFromSize(size).grid];
}