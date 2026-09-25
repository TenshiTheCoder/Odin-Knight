const knightMoves = (start, end) => {
    const moves = [
        [-1, -2],
        [-1, +2],
        [+1, -2],
        [+1, +2],
        [-2, -1],
        [-2, +1],
        [+2, -1],
        [+2, +1]
    ]

    let queue = [start];
    let parents = new Map();
    let visited = [start];

    while(queue.length > 0){
        let currentPos = queue.shift();

        for(let move of moves){
            let newRow = currentPos[0] + move[0];
            let newCol = currentPos[1] + move[1];

            if(newRow >= 0 && newRow <= 7){
                if(newCol >= 0 && newCol <= 7){
                    let destination = [newRow, newCol];

                    if(!visited.some(visitedPos => visitedPos[0] === destination[0] && visitedPos[1] === destination[1])){
                        visited.push(destination);
                        parents.set(destination.toString(), currentPos);
                        queue.push(destination);
                    }
                }
            }
        }

        if(currentPos[0] === end[0] && currentPos[1] === end[1]){
            let path = [currentPos];

            while(currentPos[0] !== start[0] || currentPos[1] !== start[1]){
                let parent = parents.get(currentPos.toString());
                path.push(parent);
                currentPos = parent;
            }
            path.reverse();
            return path;
        } 
    }
    return null;
}

console.log(knightMoves([2,3], [5, 7]));

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

// console.log(knightMoves([3, 3], [4, 3]))