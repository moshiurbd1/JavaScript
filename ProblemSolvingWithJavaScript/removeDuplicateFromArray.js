function removeDuplicate(numbers){
    const nums=[];
for(const number of numbers){
    if(nums.includes(number)!==true){
        nums.push(number);
    }
}
return nums;
}


const numbers=[1,3,1,3,2,5,6,7,8];

const x=removeDuplicate(numbers);
console.log(x);
