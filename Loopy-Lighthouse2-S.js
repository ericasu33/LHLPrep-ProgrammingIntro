// give 3 param
// 1 - range (arr of 2 numbers rep start and end of loop)
// 2 - multiples (arr of 2 numbers rep multiples we want to replace wz words)
// 3 - arr of 2 strings rep word that will replace multiples

// const loopyLighthouse = (range, multiples, words) => {
//   for (let i = range[0]; i <= range[1]; i++) {
//     const m1 = i % multiples[0] === 0 ;
//     const m2 = i % multiples[1] === 0 
//     if (m1 && m2) {
//       console.log(words.join(""));
//     } else if (m1) {
//       console.log(words[0]);
//     } else if (m2) {
//       console.log(words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// };

const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = "";

    if (i % multiples[0] === 0) {
      output += words[0];
    } 
    if (i % multiples[1] === 0) {
      output += words[1];
    }
    console.log(output || i); //if value of output is truthy, prints output. otherwise print what is on the right side of ||
  }
};

loopyLighthouse([10, 100], [2, 5], ["Happy", "Money"]);
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);