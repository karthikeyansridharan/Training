function displayError(){
    console.error("Error: Invalid Input");
    return null;
}

function isDivisibleInRange(rangeValues, divisibilityNumber){
    if(
        typeof divisibilityNumber !== "number" || 
        !Array.isArray(rangeValues) ||
        rangeValues.length > 2 ||
        typeof rangeValues[0] !== "number" || 
        typeof rangeValues[1] !== "number" ||
        rangeValues[0] > rangeValues[1]
    ) return displayError();

    const startValue = rangeValues[0];
    const endValue = rangeValues[1];

    for(let i=startValue;i<=endValue;i++){
        if(divisibilityNumber % i != 0) return false;
    }
    return true;
}

console.log(isDivisibleInRange([2,6], 120));
