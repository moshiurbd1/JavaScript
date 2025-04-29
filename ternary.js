/* Ternary--> three parts

Condition ? do something if true: do something if false;

// Semi addvance way of ternary

Condition ? Condition ? do something if true: do something if false :false;

*/
var x=6;
if(x==10){
    console.log(true);
}else{
    console.log(false);
}
//ternary
x==10?console.log(true):console.log(false);

if(x>5){
    if(x>=10){
        console.log("Greater than or equal 10");
    }else{
        console.log("Less than 10");
    }
}else{
    console.log(false);
}
//Semi advance ternary
x>5?x>=10?console.log("Greater than or equal 10"):console.log("Less than 10"):false;