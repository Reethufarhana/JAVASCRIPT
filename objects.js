// how to create an object ?

// Object.create // this method is known as constructor method.

// (or)

// object literals
const mySym = Symbol('key1') //symbol is also one datatype to access symbol

const obj = {
    name: 'Reethu',
    [mySym]: 'myKey1',
    age: '29',
    working: true,
    job: 'UI Developer',
    email: 'reethufarhana201@gmail.com'
}
console.log(obj.email);
// (or)
console.log(obj['name'])
console.log(obj[mySym])

obj.email = 'reethufarhana@outlook.com' // here the email will change which was declared in obj
console.log(obj)

Object.freeze(obj); // here freeze wont allow to change the values of the object which was declared.

obj.name = 'reethu farhana' //here the value wont change because we have given freeze so it wont allow to change the vaues.
console.log(obj) 

