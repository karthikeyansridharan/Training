function displayError(){
    console.log("Error: Invalid input");
    return null;
}

function flatten2DArray(inputArray){

    if(!Array.isArray(inputArray)) return displayError();

    const lengthOfInputArray = inputArray.length;
    let oneDArray = [];
    
    for(let i=0;i<lengthOfInputArray;i++){
        const currentValue = inputArray[i];
        if(Array.isArray(currentValue)){
            for(let j=0;j<currentValue.length;j++){
                oneDArray.push(currentValue[j]);
            }
        } else oneDArray.push(currentValue);
    }
    return oneDArray;
}

console.log(flatten2DArray([1,2,[3,4],[5,6]]));

