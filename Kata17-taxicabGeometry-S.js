//get taxi to its destination
//given an array with direction (right/left)
//right = 90 deg clockwise
//left = 90 deg anticlockwise
//output: object with the east/north and block val.

const blocksAway = directions => {
  let obj = {};
  let coord = [0,0]; //x = east/west; y = north/south
  let deg = 0;

  for (let i = 0; i < directions.length; i = i + 2){
    let j = i + 1;
      // console.log(`${directions[i]} : ${directions[j]}`);

        if (directions[0] === "left"){
          deg += 0;
        }
        if (directions[i] === "right"){
          deg += 90;
        } else if (i !== 0 && directions[i] === "left"){
          deg -= 90;
        }
      switch (deg) {
        case 0:
          coord[1] += directions[j];
          break;
        case 90:
        case -270:
          coord[0] += directions[j];
          break;
        case 180:
        case -180:
          coord[1] -= directions[j];
          break; 
        case 270:
        case -90:
          coord[0] -= directions[j];
          break;
      }
      // console.log(deg);
      // console.log(coord);

  }
  obj.east = coord[0];
  obj.north = coord[1];
  // console.log(coord);
  return obj;

}

console.log(blocksAway(["right", 2, "left", 3, "left", 1])); //[1,3]
console.log(blocksAway(["left", 2, "right", 3, "left", 1])); //[3,3]
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1])); //[3,3]
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); //[0,0]

