document.body.innerHTML= `<div class="heading-container">
 <h1>Nationalize API</h1>
<img class="icon" src="https://www.programmableweb.com/sites/default/files/nationalize.jpg" width="200px" height="100px" alt="nationalize"/>
</div>
<div class="main-Container" id="mainContainer"></div>`;

//Create a function to fetch the data from the API

const getData=async()=>{
    try{
        const data=await fetch("https://api.nationalize.io?name=leena");
         const nationalizes=await data.json();
         nationalizes.forEach((nationalise)=>{
            displayData(nationalise);
         })
    }catch(error){
        console.log(error);
    }
}

getData();

const displayData=(obj)=>{
    mainContainer.innerHTML+=`<div class="container">
    <h3>Nationalize Name: ${obj.name}</h3>
    <p>Country: ${obj.country_id} </p>
    <p>probability: ${obj.probability}</p>`

}