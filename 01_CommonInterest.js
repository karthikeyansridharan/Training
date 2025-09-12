function displayError(){
    console.error("Error: Invalid input");
    return null;
}

function isExists(inputArray,valueToCheck){
    for(let values of inputArray){
        if(values===valueToCheck) return true;
    } 
    return false;
}

function findCommonInterest(inputArray){

    if(!Array.isArray(inputArray)) return displayError();

    let groupedObject = {};
    let mostInterest = {};
    let finalInterest = {};
    let finalInterestArray = [];
    const sampleObjectPrototype = Object.getPrototypeOf(groupedObject);
    
    for(let objects of inputArray){

        const inputObjectPrototype = Object.getPrototypeOf(objects);
        if(sampleObjectPrototype !== inputObjectPrototype) continue;

        const currentObjectId = objects["id"];
        const currentObjectName = objects["name"];
        const currentObjectBooks = objects["books"];

        if(currentObjectId === undefined || currentObjectName === undefined || currentObjectBooks === undefined) continue;

        for(let books of currentObjectBooks){
            if(typeof books !== "string") continue;
            books = books.toLowerCase();
            if(!groupedObject[books]) groupedObject[books] = [currentObjectName];
            else groupedObject[books].push(currentObjectName); 
        }
    } 
    
    for(let book in groupedObject){
        for(let person of groupedObject[book]){
            if(!mostInterest[person]){
                mostInterest[person] = [];
                finalInterest[person] = 0;
            } 
            const key = person;
            for(let person of groupedObject[book]){
                if(!isExists(mostInterest[key],person) && key !== person){
                    mostInterest[key].push(person);
                    finalInterest[key]++;
                } 
            } 
        }
    }

    let maxValue = Number.MIN_VALUE;
    for(let count in finalInterest){
        if(finalInterest[count]>maxValue){
            finalInterestArray.push(count);
            maxValue = finalInterest[count];
        } 
        else if(finalInterest[count] === maxValue) finalInterestArray.push(count);
    }
    
    return {groupedObject,finalInterestArray};

}

const students = [
  {
    id: 0,
    name: "Arun",
    books: ["Wings of Fire", "Chakra"],
  },
  {
    id: 1,
    name: "Ashok",
    books: ["Chakra", "War and Peace", "The Shining"]
  },
  {
    id: 2,
    name: "Balu",
    books: ["Wings of Fire", "All about Cricket"],
  },
  {
    id: 3,
    name: "Cathi",
    books: ["Against the wind", "The Shining", "War and Peace"]
  },
];


const {groupedObject,finalInterestArray} = findCommonInterest(students);
console.log(groupedObject,"\n",finalInterestArray);



