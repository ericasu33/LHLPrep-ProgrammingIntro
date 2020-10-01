// creates an array of numbers
// param: start , end, step
// all param are integers
// return empty array if given incorrect param:
// start, end, step = undefined
// start > end
// step = 0, or negative


const range = (start, end, step) => {
  let numArr = []; 
  for (let i = start; i <= end; i = i + step) {
    if (step <= 0) {
      numArr = [];
    } else { 
      numArr.push(i);
    }
  }
  return numArr;
}

console.log(range(20, 12, -10));