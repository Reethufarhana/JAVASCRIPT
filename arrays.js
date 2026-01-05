let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// find the length of the city array
let len = city.length;
console.log(len); // Output: 4

// const arr1 = [1,2,3,true,'reethu']
// console.log(arr1[0]);

// const arr2 = new Array(4,5,false,'farhana')
// console.log(arr2[3]);

// // Array Methods
// const Arr1 = [1, 2, 3, 4, 5]
// Arr1.push(6) // which adds number at the end
// console.log(Arr1);

// Arr1.pop() //which removes last number from array
// console.log(Arr1);

// Arr1.unshift(9) //which adds number to the array at beginning
// console.log(Arr1);

// Arr1.shift() //which removes number to the array at beginning
// console.log(Arr1);

// console.log(Arr1.includes(9)); // it checks weather the given value is available in array or not and returns true or false
// console.log(Arr1.indexOf(9)); //  it checks weather the given value is available in array or not and returns index value of the given number  or returns '-1' if value is not available

// const newArr = Arr1.join(); // join method converts array into string 
// console.log(newArr);
// console.log(typeof(newArr)); 

// const Arrslice = [0, 1, 2, 3, 4, 5]
// console.log("slice example:", Arrslice);
// console.log(Arrslice.slice(1, 4)); // here it doesn't include last which was mentioned in slice

// console.log("splice example:", Arrslice);
// console.log(Arrslice.splice(1, 2)) // here it displays only mentioned part in the splice

// const marvel_heros = ['Ironman', 'Spiderman', 'Thor']
// const dc_heros = ['Superman', 'Batman', 'Aquaman']

// const superheros = marvel_heros.concat(dc_heros)
// console.log(superheros);

// // (or)

// const allheros = [...marvel_heros, ...dc_heros]; //spread operator
// console.log(allheros);

// const nestedArr = [1, 2, 3, [4, 5, [6, 7]]];
// const anotherArr = nestedArr.flat(Infinity); //it combined nested array into one array
// console.log(anotherArr);

////////////////////////////////////////////


// console.log(Array.isArray('Reethu')); // it checks weather it have the array with the name 'Reethu'
// console.log(Array.from('Reethu')) // it seperates the single letter in to an array

// const names = ['reethu', 'Reethu', 'farhana']
// const test = Array.isArray(names);
// console.log(test);

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // it combines all values in one object

// let score = Array.of(score1, score2, score3);
// console.log(typeof(score))


