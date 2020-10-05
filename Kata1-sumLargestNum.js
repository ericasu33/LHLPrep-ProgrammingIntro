//given array of 2 or more num
//find the two largest num and sum them together

const sumLargestNums = (numArr) => {
  const largestNum = [0,0];
  let index;;

  for (let i = 0; i < numArr.length; i++){
      //console.log((numArr[i]));
    if (numArr[i] > largestNum[0]) {
      largestNum[0] = numArr[i];
      index = i;
      //console.log(`numOne: ${numOne}`);
    }
  }

  for (let i = 0 ; i < numArr.length; i++) {
    if (numArr[i] > largestNum[1] && numArr[i] <= largestNum[0] && index !== i){
      largestNum[1] = numArr[i];
    }
  }
  const sum = largestNum[0] + largestNum[1];
  return `The 2 largest numbers are: ${largestNum}, and the sum is: ${sum}`;
}

console.log(sumLargestNums([1, 10,10])); //20
console.log(sumLargestNums([1, 10])); //11
console.log(sumLargestNums([1, 2, 3])); //5
console.log(sumLargestNums([10, 4, 34, 6, 92, 2])); //126

// const sumLargestNums = (numArr) => {
//   let numOne = 0;
//   let numTwo = 0;
//   for (let i = 0; i < numArr.length; i++){
//       //console.log((numArr[i]));
//     if (numArr[i] > numOne) {
//       numOne = numArr[i];
//       //console.log(`numOne: ${numOne}`);
//     }
//    }
//   for (let j = 0; j < numArr.length; j++){
//     if(numArr[j] > numTwo && numArr[j] !== numOne) {
//       numTwo = numArr[j];
//       //console.log(`numTwo: ${numTwo}`);
//     }
//   }
//   return numOne + numTwo;
// }
