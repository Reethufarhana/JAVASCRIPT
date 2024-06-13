// object destructure
const objDest = {
    id: '1',
    fullname: 'reethu',
    age: '29'
}
console.log(objDest.age); //we can display the value by using . notation
// (or)
console.log(objDest['age']); //we can display the value by using []notation
// (or) by extracting we can display the values
const {fullname} = objDest
console.log(fullname);
// (or)
const {fullname: name} = objDest
console.log(name);
