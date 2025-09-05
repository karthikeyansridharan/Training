function displayError(){
    console.log("Error: Invalid input");
    return null;
}

function findNumberOfPairs(inputArray, sum){
    
    if(!Array.isArray(inputArray) || typeof sum !== "number") return displayError();

    const lengthOfInputArray = inputArray.length;
    let keyValuePairs = {};
    let pairCount = 0;
    
    for(let i=0;i<lengthOfInputArray;i++){

        const currentValue = inputArray[i];
        if(typeof currentValue !== "number") continue;

        const valueToLook = sum - currentValue;
        
        if(keyValuePairs[valueToLook]) pairCount += keyValuePairs[valueToLook];
        if(keyValuePairs[currentValue]) keyValuePairs[currentValue] += 1;
        else keyValuePairs[currentValue] = 1;
    }
    
    return pairCount;
    
}


const inputArray = [4,2,2,6,4,1];
console.log(findNumberOfPairs(inputArray, 6));
