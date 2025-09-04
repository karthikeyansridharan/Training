
function displayError(){
    console.error("Error: Invalid Input");
    return null;
}

function convertToArray(stringToConvert){
    let charArray = [];
    const lengthOfString = stringToConvert.length;
    for(let i=0;i<lengthOfString;i++){
        charArray.push(stringToConvert.charAt(i));
    }
    return charArray;
}

function convertToString(arrayToConvert){
    let finalString = "";
    for(let i=0;i<arrayToConvert.length;i++){
        finalString += arrayToConvert[i];
    }
    return finalString;
}

function reverseArray(arrayToReverse, startIndex, endIndex){
    let leftPointer = startIndex;
    let rightPointer = endIndex;

    while(leftPointer < rightPointer){
        let temp = arrayToReverse[leftPointer];
        arrayToReverse[leftPointer] = arrayToReverse[rightPointer];
        arrayToReverse[rightPointer] = temp;
        leftPointer++;
        rightPointer--;
    }
}

function rotateString(stringToRotate, rotateCount){

    if(typeof rotateCount !== "number" || typeof stringToRotate !== "string") displayError();

    const lengthOfString = stringToRotate.length;
    let stringArray = convertToArray(stringToRotate);

    reverseArray(stringArray,0,rotateCount-1);
    reverseArray(stringArray,rotateCount,lengthOfString-1);
    reverseArray(stringArray,0,lengthOfString-1);

    return convertToString(stringArray);
}


console.log(rotateString("unar",2));