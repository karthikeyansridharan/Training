
function displayError(){
    console.error("Error: Invalid Input");
    return null;
}

function isNumberWithinRange(rangeValues, valueToCheck){

    if(
        typeof valueToCheck !== "number" || 
        !Array.isArray(rangeValues) ||
        rangeValues.length > 2 ||
        typeof rangeValues[0] !== "number" || 
        typeof rangeValues[1] !== "number" ||
        rangeValues[0] > rangeValues[1]
    ) return displayError();

    return (valueToCheck > rangeValues[0] && valueToCheck < rangeValues[1]);
}

console.log(isNumberWithinRange([1,3],2));
