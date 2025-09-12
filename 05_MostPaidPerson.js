function displayError(){
    console.log("Error: Invalid input");

    return null;
}

function findMostPaidPerson(employeeArray){
    
    let mostPaidPersonObject = {};
    const samplePrototype = Object.getPrototypeOf(mostPaidPersonObject);
    
    if(!Array.isArray(employeeArray)) return displayError();

    for(let employee of employeeArray){

        const employeeObjectPrototype = Object.getPrototypeOf(employee);

        if(samplePrototype !== employeeObjectPrototype) return displayError();
        if(!employee["name"] || !employee["dept"] || !employee["salary"]) return displayError();

        if(!mostPaidPersonObject[employee["dept"]]) mostPaidPersonObject[employee["dept"]] = {"name":"a", "salary":Number.MIN_VALUE};
    }

    for(let employee of employeeArray){
        if(employee["salary"] >=  mostPaidPersonObject[employee["dept"]].salary){
            mostPaidPersonObject[employee["dept"]].name = employee["name"];
            mostPaidPersonObject[employee["dept"]].salary = employee["salary"];
        }
    }
    return mostPaidPersonObject;
    
}

const employees = [
  { name: "Raj", dept: "IT", salary: 600 },
  { name: "Arun", dept: "IT", salary: 750 },
  { name: "Deepak", dept: "HR", salary: 500 }
];
console.log(findMostPaidPerson(employees));