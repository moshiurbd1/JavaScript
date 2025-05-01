//break keyword breaks loop with specific condition
console.log("break keyword only used in loop")
for(let i=0; i<10; i++){
    if(i==6){
        break;
    }
    console.log(i);
}
console.log("continue keyword only used in loop");
for(let i=0; i<5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}