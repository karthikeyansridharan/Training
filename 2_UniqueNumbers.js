
function displayError(){
    console.error("Error: Invalid Input");
    return null;
}

function findUniqueNumbers(arrayOne,arrayTwo){

    if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) return displayError();

    const lengthOfArrayOne = arrayOne.length;
    const lengthOfArrayTwo = arrayTwo.length;
    let dictionary = {};
    let uniqueNumbers = [];

    for(let i=0;i<lengthOfArrayOne;i++){
        
        const currentValue = arrayOne[i];
        if(typeof currentValue !== "number") return displayError();

        if(!dictionary[currentValue]) dictionary[currentValue] = true; 
    }
    
    for(let i=0;i<lengthOfArrayTwo;i++){
        
        const currentValue = arrayTwo[i];
        if(typeof currentValue !== "number") return displayError();

        if(!dictionary[currentValue]) uniqueNumbers.push(currentValue);
        else dictionary[currentValue] = false;
    }

    for(let i=0;i<lengthOfArrayOne;i++){
        const currentValue = arrayOne[i];
        if(dictionary[currentValue]) uniqueNumbers.push(currentValue);
    }

    return uniqueNumbers;
}

const arrayOne = [3,45,42,11,34,3];
const arrayTwo = [35,-7,87,11,1,45];

console.log(findUniqueNumbers(arrayOne,arrayTwo));
