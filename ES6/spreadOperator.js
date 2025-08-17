const numbers=[1,2,3,4,5];
const num2=numbers;
num2.push(10);
console.log(numbers);
console.log(num2);// Both output will change due to contianing reference that is why we use spread operator
const num3=[...numbers];
num3.push(500);
console.log(numbers);
console.log(num3);
// we can add more value before and after spread operator
const num4=[7,8,...numbers,9];
console.log(num4);
console.log(Math.max(...num4));