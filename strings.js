//string declaration
// const name = 'reethu'
// console.log(`my name is ${name}`);

const myName = new String("reethu"); //another way to create string as we create object 
// console.log(myName.charAt(2)); //to find which character occupied on that index
// console.log(myName.indexOf('e')); //to find the character index place

// const newName = myName.substring(0, 4);//it displays from index 0 to next 4 letters
// console.log(newName);

// const newName = myName.slice(2, 4); //it displays from index 2 to next letters 
// console.log(newName);

// const userName = new String("   ReethuArif  ");
// // const newNames = userName.trim(userName); //it removes white space from the data
// // const newNames = userName.trimStart(userName); // it removes starting white space from the data
// const newNames = userName.trimEnd(userName); // it removes ending white space from the data
// console.log(newNames);

/*-------------------------------*/
//Trim Inside Array using map()
const favNames = [' reethu  ', ' farhana  ', '  arif   '];
const removeSpace = favNames.map(favName => favName.trim());
console.log(removeSpace);
