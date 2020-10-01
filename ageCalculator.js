
// name = string
// yearOfBirth = 4 digit number rep. birth year - xxxx
// currentYear = 4 digit num rep. current year - xxxx
// age = currentYear - yearOfBirth

const ageCalculator = (name, yearOfBirth, currentYear) => {
  const age = currentYear - yearOfBirth;
  return `${name} is ${age} years old.`
}

console.log(ageCalculator("Tom", 1900, 2020));