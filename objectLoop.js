const laptop={
    brand:"Samsumg",
    ram: "8GB",
    processor: "3.5 GHz",
    description:"This is a latest model leptop of samsumg"
}
// for in loop used only for object and it will loop through properties
for(const keys in laptop){
    console.log(keys);
    //we can also access the value of object using properties
    console.log(laptop[keys]);
}
//another way
const keys = Object.keys(laptop);
for(const key of keys){
    console.log(key,":",laptop[key]);
}

//object declear in different way
const pencil=new Object();
const rubber= Object.create({});
console.log(pencil,rubber);