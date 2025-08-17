const numbers=[1,2,3,4];
numbers.forEach(num =>console.log(num));
// foreach function nothing return. We can just do somthing with all the array elements
//for multiline code
numbers.forEach(num=>{
    const result=num*2;
    console.log(result);
})