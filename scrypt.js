"use strict";
//1
const dayOfBirth = new Date("1990-9-21");

function formatDate(date) {
let day = date.getDate();
day = day < 10 ? "0" + day : day;
let month = date.getMonth() + 1;
month = month < 10 ? "0" + month : month;

return day + "." + month + "." + date.getFullYear();
}

console.log(formatDate(dayOfBirth));

//2
function getDiffDays(firstDate, secondDate) {
  const startDate= new Date(firstDate);
  const endDate= new Date(secondDate);
const DAY_IN_MILLISECONDS=86400000;
  if ( startDate.toString()=='Invalid Date'||endDate.toString()=='Invalid Date') {

	return console.error('Invalid date')

	} else if (startDate > endDate) {
   return console.error("your start date is later than end");
  }
    else {return (Date.parse(secondDate) - Date.parse(firstDate)) / DAY_IN_MILLISECONDS;
}
  }

console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

//3
function isWeekend(date) {
  let day = new Date(date);
  let checkWeekend=day.getDay()
  return checkWeekend === 6 || checkWeekend === 0;
}

console.log(isWeekend("2022-02-12"));
console.log(isWeekend("2022-02-13"));
console.log(isWeekend("2022-02-09"));

//4

const person = {
  fullName: "Sherlock Holmes",
  address: {
    street: "Baker Street",
    city: "London",
    house: "221b",
  },
};
//4.1
const json = JSON.stringify(person);
console.log(json);

//4.2
const parsedPerson = JSON.parse(json);
console.log(parsedPerson);

//4.3
const {
  fullName,
  address: { street, city, house },
} = person;
console.log(`${fullName}\n ${street}\n ${city}\n ${house}`);
