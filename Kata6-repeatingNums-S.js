//param: array (or array of arrays)
//two value in each array:
//1st: value to repeat
//2nd: amount of times to repeat

const repeatNums = arr => {
  let repeatString = "";
  for (let i = 0; i < arr.length; i++){
    for (let j = arr[i][1]; j > 0; j--){
      repeatString += arr[i][0];
    }
    if(i < (arr.length - 1)){
      repeatString += ", ";
    }
  }
  return repeatString;
}

console.log(repeatNums([[1, 6]]));
console.log(repeatNums([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNums([[1, 2], [2, 3]]));
