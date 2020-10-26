//given 2 param, each are an array with 2 val
//creat a chessboard using 8x8 array
//"1" in arry rep a queen on the corresponding square
//"o" rep an unoccupied squr
//return if two queens are a threa to each other

const generateBoard = (whiteQ, blackQ) => {
  const board = [];

  for (let i = 0; i < 8; i++){
    const arr = [];
    for (let j = 0; j < 8; j++){
      arr.push(0);
    }
    if (i === whiteQ[0]) {
      arr[whiteQ[1]] = 1;
    }
    if(i === blackQ[0]) {
      arr[blackQ[1]] = 1;
    }
    board.push(arr);
  }
  return board;
}

const queenThreat = generatedBoard => {
  const index = []
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < generatedBoard.length; i++){
    for (let j = 0; j < generatedBoard[i].length; j++){
      if (generatedBoard[i][j] === 1) {
        index.push([i,j]);
      }
    }
  }
  // console.log(index);
  diagonal1 = Math.abs(index[0][0] - index[1][0]);
  diagonal2 = Math.abs(index[0][1] - index[1][1]);

  if (index[0][0] === index[1][0] || index [0][1] === index[1][1] || diagonal1 === diagonal2){
    return "true || checkmate";
  } else {
    return "false"
  }
}


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));