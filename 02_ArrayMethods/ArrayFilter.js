function displayError(){
    console.error("Invalid input");
    return;
}

function arrayFilter(inputArray,callBack){

    if(!Array.isArray(inputArray)) return displayError();
    if(!callBack) throw new TypeError("Error: Callback function required");

    let finalArray = [];
    
    for(let i=0;i<inputArray.length;i++){
        if(callBack(inputArray[i],i,inputArray)) finalArray.push(inputArray[i]);
    }
    return finalArray;
}

console.log(arrayFilter([-1,23,-4,1,2,3], (x) => x > 0));
