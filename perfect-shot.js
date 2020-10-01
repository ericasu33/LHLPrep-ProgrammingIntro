//calculate position 
//X-Y grid
//begins at [0,0]
//resulting array should be [x,y] -> [-1,4]

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

//north = y + 1
//west = x - 1
//south = y - 1
//east = x + 1

const finalPosition = moves => {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    //console.log(move)
    if (move === "north") {
      y++;
    }
    if (move === "south") {
      y--;
    }
    if (move === "west") {
      x--;
    }
    if (move === "east") {
      x++;
    }
  }
// return `${x}, ${y}`;
  let finalXY = [x, y];
  return finalXY;  
}

console.log(finalPosition(moves));