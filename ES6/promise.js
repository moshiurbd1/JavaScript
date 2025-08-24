const ride=new Promise((resolve,reject)=>{
    if(false){
        resolve('Arrived');
    }else{
        reject('Not Arrived');
    }

});
ride
.then(value=>{
    console.log(value);
})
.catch(error=>{
    console.log(error);
})