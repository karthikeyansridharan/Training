function displayError(){
    console.error("Error: Invalid input");
    return null;
    
}

function getObjectEntries(inputObject){
    
    const objectPrototype = {};
    const samplePrototype = Object.getPrototypeOf(objectPrototype);

    if(Object.getPrototypeOf(inputObject) !== samplePrototype) return displayError();

    let inputObjectEntries = [];
    for(let keys in inputObject){
        const temp = [keys,inputObject[keys]];
        inputObjectEntries.push(temp);
    }
    return inputObjectEntries;
}
    
console.log(getObjectEntries({name:[1,2,3],age:12}));
