//given date (str)
//format YYYY/MM/DD
//return above in english. ex: December 2nd, 2019

const talkingCalendar = dateStr => {
  const dateArr = dateStr.split('/')
  //console.log(dateArr);
  let month = dateArr[1];
  let date = dateArr[2];
  const year = dateArr[0];

  switch(month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Feburary";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default: 
      return "Please input a valid month";
      break;
  }


  if (date[0] === "1" && (date[1] === "1" || date[1] === "2" || date[1] === "3")) {
    //date 11, 12, 13 diff from the rest.
    date += "th";
  } else if (date[1] === "1") {
    date += "st";
  } else if (date[1] === "2") {
    date += "nd";
  } else if (date[1] === "3") {
    date += "rd";
  } else {
    date += "th";
  }

  if (date[0] === "0") {
    date = date.slice(1);
  }

  return `${month} ${date}, ${year}`;
}

console.log(talkingCalendar("2017/01/01"));
console.log(talkingCalendar("2017/01/02"));
console.log(talkingCalendar("2017/01/03"));
console.log(talkingCalendar("2017/01/04"));
console.log(talkingCalendar("2017/01/05"));

console.log(talkingCalendar("2017/01/12"));
console.log(talkingCalendar("2017/01/13"));
console.log(talkingCalendar("2017/01/11"));

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/16"));
console.log(talkingCalendar("1987/08/24"));