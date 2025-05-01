const string=["mango","banana","apple","lemon","orange"];
const numbers=[1,5,22,11,55,33,2];
const a=string.sort();
const b=[...numbers].sort(function(a,b){return a-b;});

console.log(a);
console.log(b);