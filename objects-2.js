// const obj = new Object()
// console.log(obj)

// const obj = {}
// obj.name = 'reethu'
// obj.email = 'reethufarhana201@gmail.com'
// console.log(obj);

const anotherObj = {
    id: '01',
    name: {
        fullName: {
            firstName: 'reethu',
            lastName: 'farhana',
        }
    }
}
console.log(anotherObj['name']); 
//(or)
console.log(anotherObj.name);
console.log(anotherObj.name.fullName);

// merging the objects by using 'assign'

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'c', 4:'d'}
console.log(Object.assign({}, obj1, obj2)) // here {} as target object and remaing are source object. this source objects will stored in one target object and displays as a new object. here assign is used to merge two or more objetcs.

//(or) we can merge two or more objects by using spread operator

console.log({...obj1, ...obj2});

// here we can display only keys or only values

console.log(Object.keys(obj1)); //here it displays keys of the obj1 object and the datatype is array
console.log(Object.values(obj1)); //here it displays values of the obj1 object and the datatype is array
console.log(Object.entries(obj1)); // here it displays each key and value into an array "like[[],[]]"
console.log(obj1.hasOwnProperty('1')); //here it checks weather given property is there or not in object obj1 and returns true or false.
// ------------------------------------------------------------------------------------------------//

// we can create objects in array

const arrObj = [
    {
        id: '01',
        name: 'abc'
    },
    {
        id: '02',
        name: 'xyz'
    }
]
console.log(arrObj[0].id); //array starts with index 0. so it takes 0th index object values