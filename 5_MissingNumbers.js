
function isAvailable(valueToCheck,inputArray){
    for(let i=0;i<inputArray.length;i++){
        if(valueToCheck == inputArray[i]) return true;
    }
    return false;
}

function findMissingNumbers(inputArray){
    
    const lengthOfArray = inputArray.length;
    
    if(lengthOfArray < 2){
        console.error("Error: Array must contain atleast two elements");
        return inputArray;
    }

    let missingNumbers = [];
    
    let minValue = Number.MAX_VALUE;
    let maxValue = Number.MIN_VALUE;
    
    for(let i=0 ; i<lengthOfArray ; i++){
        
        if(typeof inputArray[i] != "number"){
            console.error("Error: Array must contain integers only");
            return -1;
        }

        minValue = Math.min(minValue,inputArray[i]);
        maxValue = Math.max(maxValue,inputArray[i]);
    }

    for(let i=minValue;i<=maxValue;i++){
        if(!isAvailable(i,inputArray)) missingNumbers.push(i);
    }

    return missingNumbers;
}

let arr = [7,10,12,9];

console.log(findMissingNumbers(arr));
