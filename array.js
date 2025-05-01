const numbers=[1,3,5,6,7];
const string=["am","jam","kathal"];
const numStr=[2,"two",3,"three"];

//Get element value by index
console.log(numbers[0]);

//update element value by index
string[2]="lichu";
console.log(string);

//Length of array
console.log(numbers.length);

//push & pop functions
numStr.push(4);
console.log(numStr);

numStr.pop();
console.log(numStr);

//shift and unshift functions
numStr.unshift(1);
console.log(numStr);

numStr.shift();
console.log(numStr);