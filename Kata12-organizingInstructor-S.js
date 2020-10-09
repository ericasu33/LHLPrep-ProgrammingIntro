//given list of instructors (obj in arr)
//return object with organized teach base on course {[CourseName: Instructors}]}

const organizeInstructors = instructors => {
  let obj = {};

  for (let i = 0; i < instructors.length; i++){
    course = instructors[i].course;
    teacher = instructors[i].name;
    //console.log(obj[course]);
    if (obj[course] === undefined) {
      obj[course] = [teacher];
      //console.log(obj[course]);
    } else {
      obj[course].push(teacher);
    }
  }  
  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));