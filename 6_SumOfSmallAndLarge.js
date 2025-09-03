
function findSum(inputArray){

    const lengthOfArray = inputArray.length;

    if(lengthOfArray < 2){
        console.error("Error: Array must contain atleast two elements")
        return inputArray;
    }

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
    return minValue+maxValue;
}

const inputArray = [1,2,3,4,5];
console.log(findSum(inputArray));
