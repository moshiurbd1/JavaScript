const glass={
    name: 'Yellow Stone',
    price: 2000,
    color: 'Yellow',
    isClean: true
}

const keys=Object.keys(glass);// return array of property name
console.log(keys);
const values=Object.values(glass);//return array of prperty's value
console.log(values);
// we can use for in loop to see all keys and values
for(const key of keys){
console.log(key);
}
const arrayOfArryFromObject=Object.entries(glass);
console.log(arrayOfArryFromObject);
console.log(glass);
//delete property of object
delete glass.isClean;
console.log(glass);

// Object.freeze(glass);
glass.isCheep=true;//it will not add new property due to freeze
console.log(glass);
Object.seal(glass)// we can modify
Object.Name='Blue';
console.log(glass);