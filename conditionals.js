/*Conditionals

if(conditon){
    Expression
}

if(conditon){
    Expression
}else{
    Expression
}

*/
var x=10;
if(x>5){
    console.log("Yes");
}

if(x>20){
    console.log("Yes");
}else{
    console.log("Less than 20");
}

/*Multiple conditons if else ladder */
var a=5,b=10,c=15;
if(a>b && a>c){
    console.log("Largest number is: ",a);
}else if(b>a && b>c){
    console.log("Largest number is: ",b);
}else{
    console.log("Largest number is: ",c);
}