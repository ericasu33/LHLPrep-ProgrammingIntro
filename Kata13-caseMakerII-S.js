//2 param: string, casting style(can be in arr)
//return string in given casting style

const priority = style => {
  const styleOrder = [
    {name: "camel", index: 0},
    {name: "pascal", index: 1},
    {name: "snake", index: 2},
    {name: "kebab", index: 3},
    {name: "title", index: 4},
    {name: "vowel", index: 5},
    {name: "consonant", index: 6},
    {name: "upper", index: 7},
    {name: "lower", index: 8}
  ]

  const sortArr = [];

  for (let i = 0; i < style.length; i++){
    for (let j = 0; j < styleOrder.length; j++){
      if (style[i] === styleOrder[j].name){
        sortArr.push([style[i], styleOrder[j].index]);
        }
      }
    }

  sortArr.sort(function(a, b) {
    return a[1] - b[1];
  })

  style = [];

  for (let i = 0; i < sortArr.length; i++){
    style.push(sortArr[i][0]);
  }
  return style;
}

const makeCase = (input, style) => {
  let output = "";
  let vowelArr = ["a", "e", "i", "o", "u"];
  input = input.toLowerCase();
  
  //change one case style into arr also
  if (typeof style === "string") {
      style = style.split();
    }
  
  priority(style);
  
  for (let i = 0; i < style.length; i++){
    output = ""; //clean out the existing output so we can update the 2nd round below
    for (let j = 0; j < input.length; j++){
      if (style[i] === "camel") {
        if(input[j] === " "){
          j++;
          output += input[j].toUpperCase();
        } else {
          output += input[j];
        } 
      } else if (style[i] === "pascal") {
          if (j < 1) {
            output += input[0].toUpperCase();
          } else if(input[j] === " "){
            j++;
            output += input[j].toUpperCase();          
          } else {
            output += input[j];
          } 
      } else if (style[i] === "snake") {
        if(input[j] === " "){
          output += "_";
        } else {
          output += input[j];
        }
      } else if (style[i] === "kebab") {
        if(input[j] === " "){
          output += "-";
        } else {
          output += input[j];
        }
      } else if (style[i] === "title") {
        if (j < 1) {
          output += input[0].toUpperCase();
        } else if(input[j] === " "){
          output += " ";
          j++;
          output += input[j].toUpperCase();          
        } else {
          output += input[j];
        } 
      } else if (style[i] === "vowel") {
        if (vowelArr.includes(input[j])){
          output += input[j].toUpperCase();
        } else {
          output += input[j];
        }
      } else if (style[i] === "consonant") {
        if (!vowelArr.includes(input[j])){
          output += input[j].toUpperCase();
        } else {
          output += input[j];
        }
      } else if (style[i] === "upper") {
        output += input[j].toUpperCase();
      } else {
        output += input[j];
      }
    }
    input = output; //input now has the once updated string
  }
  return output;
}
  
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["snake", "vowel", "camel"]));
