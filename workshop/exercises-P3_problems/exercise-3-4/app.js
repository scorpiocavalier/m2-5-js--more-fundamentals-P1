// Exercise 3-4 - The GRID
// ------------
const SQUARE_SIDE = '60px'
const ROWS = 10
const COLUMNS = 10

let board = document.querySelector('#board')
board.style.gridTemplateRows = `repeat(${ROWS}, ${SQUARE_SIDE})`
board.style.gridTemplateColumns = `repeat(${COLUMNS}, ${SQUARE_SIDE})`

for(let r=0; r<ROWS; r++) {
    for(let c=1; c<=COLUMNS; c++) {
        let square = document.createElement('button')
        square.id = `cell-${10 * r + c}`
        // square.innerText = square.id
        square.classList.add('cell')
        square.style.border = 'none'
        square.style.outline = 'none'        
        board.appendChild(square)
    }
}
