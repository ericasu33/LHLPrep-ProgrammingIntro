//given a num
//output a multiplication table from one to given num

const multiplicationTable = maxNum => {
  let table = "";
  for (let i = 1; i <= maxNum; i++) {
    for (let j = 1; j <= maxNum; j++){
      if (i === 1){
        table += j + " ";
      } else {
        table += (j * i) + " ";
      }
    } 
    table += "\n";
  }
  return table;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
