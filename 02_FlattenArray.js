function displayError(){
    console.log("Error: Invalid input");
    return null;
}

function pushElementsToArray(oneDArray, jaggedArray){
    if(!Array.isArray(jaggedArray)) {
        oneDArray.push(jaggedArray);
        return;
    }
    for(let values of jaggedArray){
        pushElementsToArray(oneDArray,values);
    }
}

function flatten2DArray(inputArray){

    if(!Array.isArray(inputArray)) return displayError();

    const lengthOfInputArray = inputArray.length;
    let oneDArray = [];
    
    for(let i=0;i<lengthOfInputArray;i++){
        const currentValue = inputArray[i];
        if(Array.isArray(currentValue)) pushElementsToArray(oneDArray, currentValue);
        else oneDArray.push(currentValue);
    }
    return oneDArray;
}

console.log(flatten2DArray([1,2,[3,[4,5],6],[7,8],9]));

