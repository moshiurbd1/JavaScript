const numbers=[10,20,30,40,50];
console.log(numbers);
//for of loops
console.log("using for of loop");
for(const number of numbers){
    console.log(number);
}
console.log("Using for loop");
for(let i=0; i<=10; i=i+1){
    console.log(i);
}

//while loop
console.log("Using while loop");
let i=0;
while(i<numbers.length){
    console.log(numbers[i]);
    i=i+1;
}

//do while loop
console.log("Using do while loop");
let n=0;
do{
    console.log(n);
    n++;
}while(n<=10);