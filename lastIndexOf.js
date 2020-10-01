// return the index of the last time the value occurs in the array
// if value never occurs, output = -1

// const lastIndexOf = (arr, val) => {
//   let index;
//   for (let i = 0; i < arr.length; i++){
//     //console.log(arr[i]);
//      if (arr[i] === val) {
//         index = i;
//         console.log("index is " + index); 
//       }
//       console.log(arr[i]);
//   }
//   console.log("final index: "+ index);
//   return index; 
// }


const lastIndexOf = (arr, val) => {
  let index;
  if (arr.length <= 0) {
    index = -1;  
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        index = i;
      } else if (!index) {
        index = -1;
      }
    } 
  } 
  return index;
}

//lastIndexOf([0,1,4,1,2], 1);

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 2, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);