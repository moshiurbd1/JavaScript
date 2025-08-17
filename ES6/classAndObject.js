class Student{
    constructor(name,roll,reg,grade){
        this.name=name;
        this.roll=roll;
        this.reg=reg;
        this.grade=grade;
    }
    schoolName='Phulpur Pilot Model High School';
    contact(phone){
        console.log('Phone :',phone);
    }
}

const obj=new Student('Moshiur',33,651185,12);
console.log(obj);
obj.contact('0196878942');