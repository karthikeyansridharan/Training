function displayError(){
    console.error("Invalid input");
    return;
}

function arrayMap(inputArray,callBack){

    if(!Array.isArray(inputArray)) return displayError();
    if(!callBack) throw new TypeError("Error: Callback function required");

    let finalArray = [];
    
    for(let i=0;i<inputArray.length;i++){
        finalArray.push(callBack(inputArray[i],i,inputArray));
    }
    return finalArray;
}


console.log(arrayMap([1,2,3], (x)=> x*2));
