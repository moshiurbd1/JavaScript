const subject={
    name: "English",
    code: 301,
    teacher: "Habibibullah",
    chapter:{
        fiction: 3,
        nonfiction: 2
    }
}
//access properties using dot notation
console.log(subject.chapter.nonfiction);

//access properties usign third brakets using proberty name in a String
//when proper name contain space then we can use third braket to access object's property
console.log(subject["name"]);

//we can modify property value
subject["name"]="Bangla";
console.log(subject);

//key and value function of an object
const keys=Object.keys(subject);
console.log(keys);

const values=Object.values(subject);
console.log(values);
delete subject.chapter;
console.log(subject)