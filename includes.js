const numbers=[1,3,5,6,7];
const string=["am","jam","kathal"];

//includes(value) function finds value and retrun true or false
console.log(numbers.includes(5));
console.log(numbers.includes(8));

//indexof(value) funciton return index of array
console.log(string.indexOf("jam"));

//Array.isArray() function check array or not and return true or false
console.log(Array.isArray(string));

//a.conate(b) funciton concatinate two array 
const fruits=["banana","mango","orange","lemon"];
const fruit=string.concat(fruits);
console.log(fruit);
//x.join("any seperator") function seperate array value with seperator
console.log(fruit.join("?"));