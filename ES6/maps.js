//Map function used in array
function doubleIt(num){
    return num*2;
}
const numbers=[1,2,3,4];
//Map function go through all element of an array 
const newNums=numbers.map(doubleIt); //each value will be pass through doubleIt function
console.log(newNums);

const num1=numbers.map(num=>num+5);
console.log(num1);