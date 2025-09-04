
function displayError(){
    console.error("Error: Invalid input");
    return null;
}

function findCommonNumbers(arrayOne, arrayTwo){
    if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) return displayError();

    let frequencyObject = {};
    const lengthOfArrayOne = arrayOne.length;
    const lengthOfArrayTwo = arrayTwo.length;
    let commonValues = [];

    for(let i=0;i<lengthOfArrayOne;i++){
        const currentValue = arrayOne[i];
        if(typeof currentValue !== "number") continue;
        if(!frequencyObject[currentValue]) frequencyObject[currentValue] = 1;
        else frequencyObject[currentValue] = frequencyObject[currentValue]+1;
    }

    for(let i=0;i<lengthOfArrayTwo;i++){
        const currentValue = arrayTwo[i];
        if(typeof currentValue !== "number") continue;
        if(frequencyObject[currentValue] && frequencyObject[currentValue] > 0){
            commonValues.push(currentValue);
            frequencyObject[currentValue] = frequencyObject[currentValue]-1;
        }
    }
    
    return commonValues;
}


const arrayOne = [3,45,0.2,11,"a",34,45,0,true];
const arrayTwo = [0.2,35,-7,87,11,45,"a","a",1,45,true];

console.log(findCommonNumbers(arrayOne,arrayTwo));
