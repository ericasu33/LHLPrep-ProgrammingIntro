//given a list of instructors (obj within arry)
//determine which instructor has longest name


const longestInstructorName = (instructors) => {
  let letterCount = 0;
  let moreThanOne = [];
  let longestName;
  for (let i = 0; i < instructors.length; i++){
    const name = instructors[i].name;
    //console.log(instructors[i]);
    //console.log(name);
    const wordLength = name.length;
    //console.log(wordLength);
    if (wordLength > letterCount){
      letterCount = wordLength;
      longestName = instructors[i];
      //console.log("longest name is " +  longestName.name);
    } else if (wordLength === letterCount){
      moreThanOne.push(instructors[i]);
    }
  }
  //console.log(moreThanOne.length);
  if (moreThanOne.length === 0) {
    return longestName;
  } else {
    moreThanOne.unshift(longestName);
    return moreThanOne;
  }
}

console.log(longestInstructorName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(longestInstructorName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

console.log(longestInstructorName([
  {name: "Tommy", course: "Web"},
  {name: "Bob", course: "iOS"},
  {name: "Kenny", course: "Web"},
  {name: "Jonny", course: "iOS"}
]));
