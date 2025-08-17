const numbers=[1,2,3,2,4,5,6];
const names=['am','jam','kola','kathal','lichu'];
const num=numbers.find(n=>n==2);// find function just return one element among all matched element
// if do not found theh return undefind
console.log(num);// Output will be fisrt 2 though here 2 has 2 times
const name=names.find(n=>n.length==3);// It will return jam
console.log(name);