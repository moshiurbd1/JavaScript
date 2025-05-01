//No parameter no return
console.log("No parameter no return")
function fun(){
    console.log("Hello world");
}
fun();
//Has parameter, has return
console.log("Has parameter, has return");
function double(number){
    const x=number*2;
    return x;
}
const a=10;
const b=double(a);
console.log(b);

//Has parameter, no return
console.log("Has parameter, no return");
function add(x,y){
    console.log(x+y);
}
const i=5,j=10;
add(i,j);

//No parameter, has return
console.log("No parameter, has return");
function coffe(){
    return "Take your coffe";
}
const c=coffe();
console.log(c);

//Conditional return
console.log("Conditional return");

function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
const num=5;
console.log(isEven(num));

//sum of all numbers in array
console.log("sum of all numbers in array");
function sum(numbers){
    let j=0;
    for(const number of numbers){
        j=number+j;
    }
    return j;
}
const numbers=[1,2,3,4];
console.log(sum(numbers));