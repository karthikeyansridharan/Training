import { people,processData } from "./details.js";

function isValidEmail(eMail){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(eMail);
}

function fetchDetails(){
    
    const peopleDetails = {};
    processData();
    
    for(let info of people){

        if(!info || !info["name"] || !info["email"]) continue;
        
        const isEmail = isValidEmail(info["email"]);
        const name = info["name"];
        const email = (isEmail) ? `<${info["email"]}>` : `<${info["email"]}> (INVALID EMAIL)`;
        
        if(!peopleDetails[name]) peopleDetails[name] = email;
    }
    
    return peopleDetails;
}

console.log(fetchDetails(people,processData));
