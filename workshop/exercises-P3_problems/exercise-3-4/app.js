// Exercise 3-4 - The GRID
// ------------
let board = document.querySelector('#board');

for(let r=0; r<10; r++) {
    for(let c=1; c<=10; c++) {
        let square = document.createElement('button');
        square.classList.add('cell');
        let row = r;
        if(col > 9) {
            row += c / 10;
            // col = 
        }
        let id = r * 10 + col;
        square.id = `cell-${id}`;
        board.appendChild(square);
    }
}
