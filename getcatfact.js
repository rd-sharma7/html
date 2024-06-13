const URL = "https://cat-fact.herokuapp.com/facts";

const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
 

const  getcatFacts = async () => {

    console.log("gettting data..")
    let response =  await fetch(URL);
    console.log(response)  //  RETURN JSON FORMAT

    let data =  await response.json();
    // console.log(data[0].text);  // for getting a elemnt using input need global variable
    factpara.innerText = data[0].text;

}


btn.addEventListener("click",getcatFacts);
