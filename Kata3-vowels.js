//count num of vowels that appear in a string

const numOfVowels = (str) => {
  const lettersArr = str.split(""); //split string into letter
  //console.log(lettersArr);
  const vowels = ["a", "e", "i", "o", "u"]
  let vowelCount = 0;

  for (let i = 0; i < lettersArr.length; i++){
    //console.log(`letters: ${lettersArr[i]}`);
    for (let j = 0; j < vowels.length; j++){
      //console.log(`vowels: ${vowels[j]}`);
      if (lettersArr[i] === vowels[j]){
        //console.log(`yupp its a vowel`);
        vowelCount++;
      }
    }
  }
  return `There are a total of ${vowelCount} vowels`;
}

console.log(numOfVowels("orange"));  //3
console.log(numOfVowels("lighthouse labs")); //5
console.log(numOfVowels("aeiou"));  //5
console.log(numOfVowels("12345 hmm ...")) //0