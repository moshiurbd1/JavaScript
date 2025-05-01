const string="Bangladesh";
console.log(string);
console.log(string[2]);
string[2]="k";
console.log(string);
//string is immutable that is why string can not be updated but array changable
//string[2]="k";
const a="Mango ";
const b=" Mango";
//trim keyword exclude extra space befor or after string
if(a.trim===b.trim){
    console.log("Both are same text");
}else{
    console.log("Both are not same text");
}
//string.toUpperCase() and string.toLowerCase() function make text upper and lower case
console.log(string.toUpperCase());
console.log(string.toLowerCase());
