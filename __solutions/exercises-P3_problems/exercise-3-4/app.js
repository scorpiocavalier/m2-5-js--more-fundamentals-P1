// Exercise 3-4 - The GRID
// ------------

// SETTINGS
const BOARD_SIZE = 600;
const ROWS = 10;
const COLUMNS = 10;

// The Board
const board = document.getElementById('board');
board.style.height = board.style.width = `${BOARD_SIZE}px`;

board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;

for (let cellNum = 0; cellNum < ROWS * COLUMNS; cellNum++) {
  const cell = document.createElement('div');
  cell.id = `cell-${cellNum}`;
  cell.classList.add('cell');
  board.appendChild(cell);
}
