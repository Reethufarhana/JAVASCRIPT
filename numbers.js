// here it shows number
const num = 400;
console.log(num); // output: 400

// here it shows the datatype of the given value
const balance = new Number(100);
console.log(balance); //output: [Number: 100]

//here it converts number to string
console.log(balance.toString()); // output: 100 (which is converted to string)
console.log(balance.toString().length); // ouput: 3 (which is the length of the converted string)

//here it adds precision value(decimal value)
console.log(balance.toFixed(2)); //output: 100.00 (which adds decimal value)

//here it shows round figure number
const otherNumber = 23.8965;
console.log(otherNumber.toPrecision(3)); //output: 23.9 because after 8 the value is 9 so it makes round figure 23.9
console.log(otherNumber.toPrecision(2)); //output: 24 bcz we have mentioned 2 in precision so it looks after first 2 digits wheather 3rd digit is equal or above 5 if equal or above 5 it makes round figure

const anotherNumber = 123.8965;
console.log(anotherNumber.toPrecision(4)); //output: 123.9
console.log(anotherNumber.toPrecision(3)); //output: 124
console.log(anotherNumber.toPrecision(2)); //output: 1.2e+2

const hunders = 1000000;
console.log(hunders.toLocaleString()); // output: 1,000,000
console.log(hunders.toLocaleString('en-IN')); // output: 10,00,000 converts to Indian Value