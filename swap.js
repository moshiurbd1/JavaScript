let a=5;
let b=10;
console.log(a, b);
//a=b;
//b=a;
const temp=a;
a=b;
b=temp;
console.log(a, b);

//Destructering
let x=4;
let y=5;
[x,y]=[y,x];
console.log(x,y);