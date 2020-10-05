//given array of numbers
//given a condition of either : odd or even
//add them nums that qualify for condition together
//if empty array, return 0

const conditionalSum = (numArr, condition) => {
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    let even = (numArr[i] % 2 === 0);
    let odd = !even;
    //console.log(numArr[i])
    if (condition === "even" && even) {
       sum += numArr[i];
       console.log(`${numArr[i]} is even, added to sum`);
       //console.log(`number: ${numArr[i]}; even?: ${even}`);
    } else if (condition === "odd" && odd) {
      sum += numArr[i];
      console.log(`${numArr[i]} is odd, added to sum`);
    } 
  }
  return `the added up sum is: ${sum}`;
}

// console.log(conditionalSum([1,2,3,5,8], "even"));  
// console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
// console.log(conditionalSum([13, 88, 12, 44, 99], "even")); //144
console.log(conditionalSum([], "even"));
//console.log(conditionalSum(6));