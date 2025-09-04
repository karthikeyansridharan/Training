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
    let convertArrayToString = "";
    for(let i=0;i<arrayToConvert.length;i++){
        convertArrayToString += arrayToConvert[i];
    }
    return convertArrayToString;
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

function rotateString(stringToRotate, rotateCountOriginal){

    const lengthOfString = stringToRotate.length;
    const rotateCount = rotateCountOriginal % lengthOfString;

    if(typeof rotateCount !== "number" || typeof stringToRotate !== "string") displayError();

    let orientation = (rotateCount<0) ? "left" : "right"; 
    let stringArray = convertToArray(stringToRotate);

    if(orientation === "right"){
        reverseArray(stringArray,0,rotateCount-1);
        reverseArray(stringArray,rotateCount,lengthOfString-1);
        reverseArray(stringArray,0,lengthOfString-1);
    } else{
        let tempCount = rotateCount * -1;
        reverseArray(stringArray,0,tempCount);
        reverseArray(stringArray,tempCount+1,lengthOfString-1);
        reverseArray(stringArray,0,lengthOfString-1);
    }

    return convertToString(stringArray);
}


console.log(rotateString("12345",-7));

