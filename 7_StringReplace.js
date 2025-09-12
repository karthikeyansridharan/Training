function displayError(){
    console.error("Error: Invalid input");
    return null;
}

function addToArray(tempArray,fromIndex,toIndex,actualString){
    
    let tempString = "";

    for(let i=fromIndex;i<=toIndex;i++){
        tempString += actualString.charAt(i);
    }
    tempArray.push(tempString);
}

function replaceString(actualString, replacementWords){

    if(typeof actualString != "string") return displayError();

    const lengthOfString = actualString.length;
    let dict = {};

    for(let i=0;i<replacementWords.length;i++){
        if(typeof replacementWords[i][0] != "string") return displayError();
        dict[`#[${replacementWords[i][0]}]`] = replacementWords[i][1];
    }

    let tempArray = [];
    let replacedString = "";
    let startIndex = 0;
    let tillIndex = 0;

    for(let i=0;i<lengthOfString;i++){
        if(actualString.charAt(i)==" "){
            tillIndex = i-1;
            addToArray(tempArray,startIndex,tillIndex,actualString);
            startIndex = i+1;
        } 
    }
    addToArray(tempArray,startIndex,lengthOfString-1,actualString);

    for(let i=0;i<tempArray.length;i++){
        let replacement = dict[tempArray[i]];
        if(replacement) tempArray[i] = replacement;
        replacedString += " " + tempArray[i];
    }
    
    return replacedString;
}

console.log(replaceString("Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]",[["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]]));
