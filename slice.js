const country="Bangladesh";
//slice(start index,destination index) function slice string with index 
console.log(country.slice(2,6));

//split("seperation string") function split the string with given string 
const sentence="I am a good and hardworking perosn";
console.log(sentence.split(""));
console.log(sentence.split(" "));

//You can make a string into array using split() funciton
const str="I,am,a,good,and,hardworking,perosn";
const string=str.split(",");
console.log(string);

// You can make this array to sentence again using join(joining string) function
console.log(string.join(" "));

// a.concate(b) function concate two string or array and includes function retrun true or false
const a="Bangla";
const b="desh";
const c=a.concat(b);
console.log(c);

console.log(c.includes("desh"));