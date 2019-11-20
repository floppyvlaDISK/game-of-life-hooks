export default function useGameOfLife(size) {
  return [{
    rows: createRows()
  }];

  function createRows() {
    let result = [];
    for (let row = 0; row < size; row++) {
      result.push({
        cells: createGridCellsFor(row)
      });
    }
    return result;
  }
  function createGridCellsFor(row) {
    let result = [];
    for (let col = 0; col < size; col++) {
      result.push(`${row}-${col}`);
    }
    return result;
  }
}