function displayError(){
    console.log("Error: Invalid input");
    return null;
}

function countStrings(stringArray){

    if(!Array.isArray(stringArray)) return displayError();

    let stringFrequency = {};

    for(let stringValue of stringArray){
        
        if(typeof stringValue !== "string" || stringValue === "") continue;
        stringValue = stringValue.toLowerCase();
        if(stringFrequency[stringValue]) stringFrequency[stringValue]++;
        else stringFrequency[stringValue] = 1;
    }
    return stringFrequency;
}

console.log(countStrings(["a", "b", true,"a", "c", "b", "A",""]));
