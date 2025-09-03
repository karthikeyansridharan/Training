
function displayError(typeOfInput){
    console.error(`Input must be ${typeOfInput}`);
    return null;
}

function isNumberWithinRange(rangeValues, valueToCheck){

    if(typeof valueToCheck != "number") return displayError("an Integer");
    if(typeof rangeValues[0] != "number" || typeof rangeValues[1] != "number") return displayError("an Integer");

    return (valueToCheck > rangeValues[0] && valueToCheck < rangeValues[1]);
}

function isDateWithinRange(dateRange, dateToCheck){
    if(typeof dateToCheck !== typeof new Date()) return displayError("a Date");
    if(typeof dateRange[0] !== typeof new Date() || typeof dateRange[1] != typeof new Date()) return displayError("a Date");
    
    return (dateToCheck > dateRange[0] && dateToCheck < dateRange[1]);
}


console.log(isNumberWithinRange([1,2],9));
console.log(isDateWithinRange([new Date('2025-01-01'),new Date('2025-01-10')],new Date('2025-01-06')));

