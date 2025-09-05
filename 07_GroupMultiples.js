function displayError(){
    console.log("Error: Invalid input");
    return null;
}

function groupMultiples(inputArray){
    
    if(!Array.isArray(inputArray)) return displayError();

    let groupedValues = {};
    
    for(let i=1;i<=10;i++){
        
        let tempArray = [];
        
        for(let values of inputArray){
            if(typeof values !== "number") continue;
            if(values % i === 0) tempArray.push(values);
        }

        if(tempArray.length !== 0) groupedValues[i] = tempArray;
    }
    return groupedValues;
}

console.log(groupMultiples([34, 1.2, -10, 15, 7, 21, 81]));
