//given string
//remove space and turn char written into a square using sqr root
//return str in square code

const squareCode = str => {
  str = str.replace(/ +/g, "");
  let numOfColumns = Math.ceil(Math.sqrt(str.length));
  // console.log(numOfColumns);
  // numOfColumns = new RegExp(".{1," + numOfColumns + "}", "g");
  // str = str.match(numOfColumns).join("\n");

  let msg = "";
  for (let i = 0; i < numOfColumns; i++) {
    for (let j = i; j < str.length; j = j + numOfColumns) {
      // console.log(`${j}: ${str[j]}`);
      msg += str[j];
    }
    msg += " ";
  }
  return msg;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));