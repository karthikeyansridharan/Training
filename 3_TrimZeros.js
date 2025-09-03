
function trimZeros(stringWithZeros, removeCondition){

    if(typeof stringWithZeros == "number") stringWithZeros += "";
    else if(typeof stringWithZeros != "string"){
        console.error("Error: Input must be a string or number");
        return null;
    }
    else if(stringWithZeros == 0) return stringWithZeros;

    const lengthOfInput = stringWithZeros.length;
    let initialIndex = 0;
    let finalIndex = lengthOfInput-1;

    if(removeCondition != "leading"){
        while(finalIndex >= 0 && stringWithZeros.charAt(finalIndex) == 0) finalIndex--;
    }
    if(removeCondition != "trailing"){
        while(initialIndex < lengthOfInput && stringWithZeros.charAt(initialIndex) == 0) initialIndex++;
    }
    
    let stringAfterTrim = "";

    for(let i = initialIndex; i <= finalIndex; i++){
        stringAfterTrim += stringWithZeros.charAt(i);
    }
    return stringAfterTrim;
}

console.log(trimZeros("00100","leading"));