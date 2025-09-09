function displayError(){
    console.error("Error: Invalid input");
    return null;
}

function isExists(inputArray,valueToCheck){
    for(let values of inputArray) if(values===valueToCheck) return true;
    return false;
}

function groupNamesWithFirstChar(inputArray){

    if(!Array.isArray(inputArray)) return displayError();

    let groupedNames = {};
    let groupedArray = [];
    for(let names of inputArray){
        if(typeof names !== "string") continue;
        const firsrChar = names.charAt(0).toLowerCase();
        names = names.toLowerCase();
        if(!groupedNames[firsrChar]) groupedNames[firsrChar] = [names];
        else {
            if(!isExists(groupedNames[firsrChar],names)) groupedNames[firsrChar].push(names);
        }
    }
    for(let names in groupedNames) groupedArray.push(groupedNames[names]);
    return groupedArray;
}

console.log(groupNamesWithFirstChar(["Arun","Arun","123",null,"balu","blue","cathy", "krish","arun", "aadhir", "aariketh", "kamal"]));
