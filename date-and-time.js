let myDate = new Date();
// console.log(myDate); // displays date in unreadable format

// console.log(myDate.toString()); // displays in readable format

// console.log(myDate.toDateString()); // displays only date(day month date year)format it wont display time

// console.log(myDate.toLocaleDateString()); // displays in mm/dd/yyyy format it wont display time

// console.log(myDate.toLocaleString()); // displays in mm/dd/yyyy format it will display time

// console.log(myDate.toISOString()); // displays in yyyy-mm-dd format with time

// console.log(myDate.toJSON()); // displays date in unreadable format

//console.log(typeof(myDate)); // it is object

// let userDate = new Date(2023, 0, 14) // here it should be declare in year month and date format.. index starts from 0 so it takes jan as index 0
// console.log(userDate.toDateString());

// let createdDate = new Date(2023, 1, 23, 10, 15);
// console.log(createdDate.toLocaleString()); // displays date in mm/dd/yyyy format and time in hh:mm:ss format

// let formattedDate = new Date("01-14-2024"); // here month wont starts in index format 
// console.log(formattedDate.toLocaleString()) // displays date in mm/dd/yyyy format and time in hh:mm:ss format 

// <!----------------------- Time Concept ---------------->
// let myTime = Date.now()
// console.log(myTime);  // whisch display time in milliseconds from (1st jan 1970)

// // let formattedDate = new Date("01-14-2024"); // here month wont starts in index format 
// // console.log(formattedDate.getTime())

// console.log(myTime/1000); // which converts milliseconds to seconds gives in decimal point

// console.log(Math.floor(myTime/1000)); // here it removes decimal

let newDate = new Date()
console.log(newDate.getMonth()) // here it takes the month in index form
console.log(newDate.getMonth() + 1) // here it shows the exact month
console.log(newDate.getDay()) // here it takes the day in index form