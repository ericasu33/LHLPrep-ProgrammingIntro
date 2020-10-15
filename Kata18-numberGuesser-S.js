//user enter a num (guess the sercret number)
//return either user # is too large or too small
//also return # of tries
//inputting same number multiple times only count as one try

const game = () => {
  let prompt = require("prompt-sync")();
  const randomNum = Math.floor(Math.random() * 101);
  // console.log(randomNum);

  let answer;
  let guessedVal = -1;
  let tries = 0;

  console.log("To exit, please enter '000'");

while (answer !== randomNum) {
    answer = Number(prompt("Guess a number between 1 - 100: "));
    
    if (isNaN(answer)) {
        console.log("Not a number! Try again!")
    } else if (answer === guessedVal) {
        console.log("Already Guessed!");
    } else if (answer === randomNum){
        tries++;
        return `You got it! You took ${tries} attempts!`;
    } else if (answer === 000) {
        return "Good-bye";
    } else {
        if (answer > randomNum) {
          tries++;
          guessedVal = answer;
          console.log("Too High!");
        } else if (answer < randomNum) {
          tries++;
          guessedVal = answer;
          console.log("Too Low!");
        } 
    }
  }
};

console.log(game());
