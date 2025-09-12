function displayError(){
    console.error("Error: Invalid input");
    return null;
    
}

function getKeys(inputObject){
    
    const objectPrototype = {};
    const samplePrototype = Object.getPrototypeOf(objectPrototype);

    if(Object.getPrototypeOf(inputObject) !== samplePrototype) return displayError();

    let inputObjectKeys = [];
    for(let keys in inputObject){
        inputObjectKeys.push(keys);
    }
    return inputObjectKeys;
}

console.log(getKeys({name:"a",name:"aaa",age:12}));
