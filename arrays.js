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

const Arrslice = [0, 1, 2, 3, 4, 5]
console.log("slice example:", Arrslice);
console.log(Arrslice.slice(1, 4)); // here it doesn't include last which was mentioned in slice

console.log("splice example:", Arrslice);
console.log(Arrslice.splice(1, 2)) // here it displays only mentioned part in the splice