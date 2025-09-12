function displayError(){
    console.error("Error: Invalid input");
    return null;
    
}

function getValues(inputObject){
    
    const objectPrototype = {};
    const samplePrototype = Object.getPrototypeOf(objectPrototype);

    if(Object.getPrototypeOf(inputObject) !== samplePrototype) return displayError();

    let inputObjectValues = [];
    for(let keys in inputObject){
        inputObjectValues.push(inputObject[keys]);
    }
    return inputObjectValues;
}
    
console.log(getValues({name:"a",age:12}));
