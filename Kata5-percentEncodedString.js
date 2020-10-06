//replace spacing with %20

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

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("    Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
