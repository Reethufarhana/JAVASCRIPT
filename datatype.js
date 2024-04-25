// Stack and Heap Concept

// Stack which takes the copy of the first declared datatype value
let user_name = 'Reethu';
let  another_user_name = user_name; // here it takes the copy of the first declared value

another_user_name = "Farhana";

console.log(user_name); //here it wont udate any value and displays as it is declared

console.log(another_user_name); //here it displays the second given value


// Heap is a different space for storing data where JavaScript stores objects and functions. here it takes the reference of the declared datatype

let userOne = {
    name: 'reethu',
    age: '29'
}

// const person = {...userOne}; //here it wont change the first declared values

const person = userOne
person.name = "Jaipal";

console.log(userOne);



// reverse the array value example
const arr = [10,35,7,4,20,5];

function reverse (arr){
   let output = [];
   for(let i = arr.length - 1; i > -1; i--){
          output.push(arr[i])
   }
   return output;
}

console.log(reverse(arr));


// function multiply(a) {
//     return a * 2;
// }
// function square(n) {
//     return multiply (n*n);
// }
// function printSquare(n) {
//     var squared = square(n);
//     console.log(squared);
// }
// printSquare(4);