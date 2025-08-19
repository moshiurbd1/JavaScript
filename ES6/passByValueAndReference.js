const { jsx } = require("react/jsx-runtime");

let a=5;
let b=7;
function add(x,y){
    x=10;
    const result=x+y;
    return result;
}
console.log(a);// vlue of 'a' will not change to 10
// Because primitive data passed by value.
console.log(add(a,b));
console.log('a = ',a,'b = ',b);

const student1={name:'Moshiur',roll:33};
const student2={name:'Rahman',roll:1};

function std(a,b){
    a.roll=1;
}
// Object and array passed by reference because it is non primitive data
std(student1,student2);
console.log(student1,student2);
