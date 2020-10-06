//replace spacing with %20
// uses .trim();

const urlEncode = (str) => {
  let word = "";
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);
    if (str[i] === " "){
        word += "%20";
        //console.log(str[i]);
    } else {
      word += str[i];
    }
  }
  return word;
}

//replace spacing with %20
//without using .trim()

const urlEncode = (str) => {
  let word = "";
  let index1 = 0;
  let index2 = 0;

  //finding index of the actual first letter
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " "){
      index1 = i ;
      break;
    } 
  }

  //finding index of the actual last letter
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " "){
      index2 = i ;
      break;
    } 
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " "){
      word += str[i];
    } else if (str[i] === " " && i >= index1 && i <= index2){
      word += "%20";
    }
  }  
   return word;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
