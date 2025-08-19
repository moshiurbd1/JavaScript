function greetings(morningGreetings,name){
    morningGreetings(name);
}

function morningGreetings(name){
    console.log('Good morning!',name);
}

greetings(morningGreetings,'Torikul');
//callback function call another function inside a function


