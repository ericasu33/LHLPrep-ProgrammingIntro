//given string
//convert string wz spaces into Camel Case strings.

const camelCase = str => {
  let output = "";
  for (let i = 0; i < str.length; i++){
    //console.log(`"${output}" -> index ${i}`);
    if(str[i] === " "){
      output += "";
      //console.log(`we just encountered a space, so we add NTH`);
      i++;
      //console.log(`\nindex ${i}`);
      output += str[i].toUpperCase();
      //console.log(`Capitalize it "${output}"`);
    } else {
      output += str[i];
      //console.log(`not a space, so just adding letter "${output}"`);
    }
  }
  return output;
}

console.log(camelCase("i love mmm")); //iLoveMmm
console.log(camelCase("this is a string")); //thisIsAString
console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious