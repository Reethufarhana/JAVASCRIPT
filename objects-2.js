// const obj = new Object() //  we can declare object in this way too. this is object constructor. this is singleton object.
// console.log(obj);

// const obj = {}
// obj.id = '01'
// obj.name = 'reethu'
// obj.email = 'reethufarhana201@gmail.com'
// obj.employee = true
// console.log(obj);

/*----------------nested object----------------*/

const anotherObj = {
    email: 'obj@gmail.com',
    name: {
        userName: {
            firstName: 'reethu',
            lastName: 'farhana'
        }
    }
}
console.log(anotherObj.name); // 