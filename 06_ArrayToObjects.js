function displayError(){
    console.log("Error: Invalid input");
    return null;
}

function convertToObject(inputArray){
    
    if(!Array.isArray(inputArray)) return displayError();
    let finalObject = {};

    for(let arrayValue of inputArray){

        if(arrayValue.length != 2) continue;

        let key = arrayValue[0];
        let value = arrayValue[1];
        
        if(!finalObject[key]) finalObject[key] = value;
    }
    return finalObject;
}

console.log(convertToObject([["name", "Arun"], ["age", 39], ["isTrue", true, 1]]));
