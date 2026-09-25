const knightMoves = (start, end) => {
    
}

function buildBoard(){
    let board = [];

    for(let x = 0; x < 8; x++){
        let row = [];
        for(let y = 0; y < 8; y++){
            let square = {row: x, col: y};
            row.push(square);
        }

        board.push(row);
    }
    return board;
}

console.log(buildBoard());

// console.log(knightMoves([3, 3], [4, 3]))