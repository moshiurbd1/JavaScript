        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())//.json() is not similar but close to JSON.parse()
      //and conver data to javaScript object
      .then(json => console.log(json))


      function bringData(){
        const api="https://jsonplaceholder.typicode.com/todos/1";
        fetch(api)
        .then(response=>response.jso())//json()
        .then(json=>console.log(json))
        .catch(error=>console.log('Error happend',error))

      }

      function userDataLoad(){
        const api='https://jsonplaceholder.typicode.com/users';
        fetch(api)
        .then(res=>res.json())
        // .then(users=>console.log(users));
        .then(users=>dispayUser(users))
      }

      function dispayUser(users){
        console.log(users);
        users.forEach(element => {
            const ul=document.createElement('ul');
            document.body.appendChild(ul);
            const li=document.createElement('li');
            li.innerText=element.name;
            ul.appendChild(li);
        });
      }

const loadData=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const data= await res.json();
  console.log(data);

}
const loadData2=async()=>{
  try{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const data= await res.json();
  console.log(data);

  }
  catch(error){
    console.log('Data load error');
    //or console.error('Data load error);
  }
}