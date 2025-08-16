//Object destructuring
const obj={
    name: 'Moshiur',
    phone: '0196435786',
    address: 'Mymensigh'
}

const {name,phone:mobile}=obj; //we can change property name such as phone to mobile
const name2=obj.name;
console.log(name);
console.log(mobile);
console.log(name2);

//Array destructuring

const numbers=[1,2,3];
const [first,second]=numbers;
console.log(first);
console.log(second);
let x=5; let y=10;
 [x,y]=[y,x];
console.log(x,y);

function doubleIt(a,b){
return [a*2,b*2];
}
const [val1,val2]=doubleIt(2,3);

console.log(val1,val2);