
function displayError(){
    console.error("Error: Invalid input");
    return null;
}

function merge(inputArray, startIndex, middleIndex, endIndex){
    let tempArray = [];
    let tempArrayPointer = 0;
    let leftIndex = startIndex;
    let rightIndex = middleIndex+1;

    while(leftIndex <= middleIndex && rightIndex <= endIndex){
        if(inputArray[leftIndex] <= inputArray[rightIndex]){
            tempArray[tempArrayPointer++] = inputArray[leftIndex++];
        } else{
            tempArray[tempArrayPointer++] = inputArray[rightIndex++];
        }
    }

    while(leftIndex <= middleIndex) tempArray[tempArrayPointer++] = inputArray[leftIndex++];
    while(rightIndex <= endIndex) tempArray[tempArrayPointer++] = inputArray[rightIndex++];

    tempArrayPointer = 0;

    for(let i=startIndex; i<=endIndex; i++){
        inputArray[i] = tempArray[tempArrayPointer++];
    }
}

function mergeSort(inputArray, startIndex, endIndex){

    if(startIndex >= endIndex) return inputArray; 

    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    mergeSort(inputArray,startIndex,middleIndex);
    mergeSort(inputArray,middleIndex+1,endIndex);
    
    merge(inputArray,startIndex,middleIndex,endIndex);
}

function findCommonNumbers(arrayOne, arrayTwo){
    if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) return displayError();

    const startIndex = 0;
    const lengthOfArrayOne = arrayOne.length;
    const lengthOfArrayTwo = arrayTwo.length;
    let commonValues = [];
    
    mergeSort(arrayOne,startIndex,lengthOfArrayOne-1);
    mergeSort(arrayTwo,startIndex,lengthOfArrayTwo-1);

    let pointerForArrayOne = 0;
    let pointerForArrayTwo = 0;
    while(pointerForArrayOne < lengthOfArrayOne && pointerForArrayTwo < lengthOfArrayTwo){
        
        if(typeof arrayOne[pointerForArrayOne] !== "number" || typeof arrayTwo[pointerForArrayTwo] !== "number") return displayError(); 
        if(arrayOne[pointerForArrayOne] < arrayTwo[pointerForArrayTwo]) pointerForArrayOne++;

        else if(arrayOne[pointerForArrayOne] === arrayTwo[pointerForArrayTwo]){
            commonValues.push(arrayOne[pointerForArrayOne++]);
            pointerForArrayTwo++;
        }

        else pointerForArrayTwo++;
    }
    return commonValues;
}


const arrayOne = [3,45,0.2,11,34];
const arrayTwo = [0.2,35,-7,87,11,1,45];

console.log(findCommonNumbers(arrayOne,arrayTwo));
