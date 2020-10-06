//given array of 2 or more num
//find the two largest num and sum them together

const sumLargestNums = (numArr) => {
  if (numArr.length <= 1) return "Please input two or more numbers";
  const largestNum = [-Infinity,-Infinity];

  for (let i = 0; i < numArr.length; i++){
      //console.log((numArr[i]));
    if (numArr[i] >= largestNum[0]) {
      largestNum[1] = largestNum[0]; //because the new numArr[i] is greater than exisiting largestNum[0], passes the existing num to largestNum[1];
      largestNum[0] = numArr[i];
    } else if (numArr[i] > largestNum[1]){
      largestNum[1] = numArr[i];
    }
    //console.log(largestNum);
  }
  const sum = largestNum[0] + largestNum[1];
  return `The 2 largest numbers are: ${largestNum} and the sum is: ${sum}`;
}

console.log(sumLargestNums([10, 6, 20])); //40
console.log(sumLargestNums([1, 10])); //11
console.log(sumLargestNums([1, 2, 3])); //5
console.log(sumLargestNums([1.5, 2.3, 3])); //5
console.log(sumLargestNums([10, 4, 34, 6, 92, 2])); //126
console.log(sumLargestNums([]));
console.log(sumLargestNums([-100,-20,-3.5,10]));
console.log(sumLargestNums([-100, Math.log(0)]));

// const sumLargestNums = (numArr) => {
//   if (numArr.length <= 1) return "Please input two or more numbers";

//   const largestNum = [0,0];
//   let index;;

//   for (let i = 0; i < numArr.length; i++){
//       //console.log((numArr[i]));
//     if (numArr[i] > largestNum[0]) {
//       largestNum[0] = numArr[i];
//       index = i;
//       //console.log(`numOne: ${numOne}`);
//     }
//   }

//   for (let i = 0 ; i < numArr.length; i++) {
//     if (numArr[i] > largestNum[1] && numArr[i] <= largestNum[0] && index !== i){
//       largestNum[1] = numArr[i];
//     }
//   }
//   const sum = largestNum[0] + largestNum[1];
//   return `The 2 largest numbers are: ${largestNum}, and the sum is: ${sum}`;
// }



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
