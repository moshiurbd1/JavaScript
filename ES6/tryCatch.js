try{
const x=false;
    if(!x){
        throw "false";
    }else{
        throw "true";
    }
}
catch(error){
    console.log(error);
}