const add=(a,b)=>a+b;
console.log(add(5,10));

//single parameter
const square=a=>a*a; //we can avoid parenthesis 
console.log(square(4));

//without parameter
const pi=()=>Math.PI;
console.log(pi());

//large arrow function 

const doMath=(a,b,c)=>{
    const sum=a+b+c;
    const mult=a*b*c;
    return sum+mult;
}
console.log(doMath(5,10,15));