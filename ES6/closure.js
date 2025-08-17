//A closure in JavaScript is created when a function 
// "remembers" the variables from its outer (enclosing) scope, even
// after that outer function has finished executing.
function watch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const watch1=watch();
console.log(watch1);
console.log(watch1());
console.log(watch1());
//closure can remember function's variable's value
const watch2=watch();
console.log(watch2());
console.log(watch1());
console.log(watch2()); 
