class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log('I is going');
    }

}
const v=new Vehicle('Bus',200000);
console.log(v);

class Bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat=seat;
        this.ticketPrice=ticketPrice;
    }
}
const b=new Bus('Mini Bus',200000,30,'50 tk');
console.log(b);

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
}
const t=new Truck('Hulk',5000000,'100 ton');
console.log(t);