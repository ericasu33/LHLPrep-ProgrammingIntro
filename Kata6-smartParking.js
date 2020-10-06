//given an array of arrays with 2 param:
//parking spot scheme, vehicle type
//return coordinates of available parking spot for given vehicle type
//return in [X,Y]
//vehicle types:
//R - Regular (park in in R only)
//S - Small   (park in R, S)
//M - Motorcycles (park in R, S, M)
//Available Spot - Upper Case
//Unavailable Spot - lower case

//using .includes()
// const whereToPark = (spots, vehicle) => {
//   const regular = "R";
//   const small = ["R", "S"];
//   const motorcycle = ["R", "S", "M"];
//   let parkCoord = [-1, -1];
//   vehicle = vehicle.toLowerCase();

//   for (let i = 0; i < spots.length; i++){
//     //console.log(spots[i]);
//     for (let j = 0; j < spots[i].length; j++){  //i = y
//       //console.log(spots[i][j]);
//       if(vehicle === "regular" && spots[i][j] === regular){ //j = x
//         //console.log("space here")
//         return parkCoord = [j , i];
//       } else if (vehicle === "small" && small.includes(spots[i][j])){
//         return parkCoord = [j , i];
//       } else if (vehicle === "motorcycle" && motorcycle.includes(spots[i][j])){
//         return parkCoord = [j , i];
//       } 
//     }
//   }
//   if (parkCoord = [-1, -1]){
//     return "Sorry, there is no parking space available."
//   } else {
//     return parkCoord;
//   }
// }

//without .includes()
const whereToPark = (spots, vehicle) => {
  let parkCoord = [-1, -1];
  vehicle = vehicle.toLowerCase();

  for (let i = 0; i < spots.length; i++){
    //console.log(spots[i]);
    for (let j = 0; j < spots[i].length; j++){  //i = y
      //console.log(spots[i][j]);
      if(vehicle === "regular" && spots[i][j] === "R"){ //j = x
        //console.log("space here")
        return parkCoord = [j , i];
      } else if (vehicle === "small" && (spots[i][j] === "R" || spots[i][j] === "S")){
        return parkCoord = [j , i];
      } else if (vehicle === "motorcycle" && (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M")){
        return parkCoord = [j , i];
      } 
    }
  }
  if (parkCoord = [-1, -1]){
    return "Sorry, there is no parking space available."
  } else {
    return parkCoord;
  }
}

console.log(whereToPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'R', 'M']
  ],
  'regular'
)); //[2, 3]


console.log(whereToPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
)); //[4, 0]

console.log(whereToPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
)); //false

console.log(whereToPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
)) //[3, 1]