import { useState, useEffect } from 'react';

export default function useCounter(initial) {
  const [counter, set] = useState(initial);
  useEffect(handleUseEffect);

  return [counter, set];

  function handleUseEffect() {
    updateTitle();
    alertIfDivisibleBy10();
    function updateTitle() {
      document.title = `boi, ${counter}`;
    }
    function alertIfDivisibleBy10() {
      if (counter % 10 === 0) {
        alert(`Yeah, baby, it's ${counter}`);
      }
    }
  }
}