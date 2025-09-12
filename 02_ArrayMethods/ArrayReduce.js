function displayError(){
    console.error("Invalid input");
    return;
}

function arrayReduce(inputArray,callBack,initialValue){

    if(!Array.isArray(inputArray)) return displayError();
    if(!callBack) throw new TypeError("Error: Callback function required");

    let finalValue = 0;
    if(initialValue) finalValue = initialValue; 
    if(!initialValue && inputArray.length === 0) throw new TypeError("Error: Array can't be empty");
    
    for(let i=0;i<inputArray.length;i++){
        finalValue = (callBack(finalValue,inputArray[i],i,inputArray));
    }
    return finalValue;
}


console.log(arrayReduce([1,2,3],(sum,x,i) => sum += x+i,10));
