// give 3 param
// 1 - range (arr of 2 numbers rep start and end of loop)
// 2 - multiples (arr of 2 numbers rep multiples we want to replace wz words)
// 3 - arr of 2 strings rep word that will replace multiples

const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words.join(""));
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  } 
}

loopyLighthouse([10, 100], [2, 5], ["Happy", "Money"]);
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);