// 100 bottles per container
// num / 100 = container amount with decimals
// to get rid of decimals, use %; minus the remainder from the total

const howManyHundreds = num => {
  return ((num - (num % 100)) / 100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
