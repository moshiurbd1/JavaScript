const string="I am learing web dev.";

console.log("Using for of loop");
let reverse="";
for(const str of string){
    reverse=str+reverse;
}
console.log(reverse);

console.log("Using for loop");
let rev="";
for(let i=0; i<string.length; i++){
rev=string[i]+rev;
}
console.log(rev);

const x=string.split("").reverse().join("");
console.log(x);