//JavaScrip Object Notation = JSON

const student={name:'Moshiur',roll:33,department:'CSE',phone:'0198365416'};
//JSON.stringify(student) make object into string and property's single quote into double quotes
const jsonStudent=JSON.stringify(student);
console.log(jsonStudent);
console.log(typeof jsonStudent);
//JSON.parse(json.Student) make sting to old type (object) which can be access by notation
const oldStudent=JSON.parse(jsonStudent);
console.log(oldStudent);