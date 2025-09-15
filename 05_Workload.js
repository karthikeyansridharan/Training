import { calculateEstimatedHours } from "./03_EstimatedHoursForTask.js";
import { people,todos,processData } from "./details.js";

function calculateWorkload(people,todos,processData){
    const workload = calculateEstimatedHours(people,todos,processData);
    const mapOfPeople = {};
    const capacity = [];
    for(let person of people){
        mapOfPeople[person["name"]] = person["capacityHrsPerDay"]*5;
    }
    
    for(let person of workload){
        if(person["person"] !== "UnAssigned"){
            const nameOfPerson = person["person"];
            const workingHrs = person["hrs"];
            const capacityOfPerson = mapOfPeople[person["person"]];
            const templateLiteral = (capacityOfPerson<workingHrs) ?`OVER ALLOCATED BY ${workingHrs-capacityOfPerson} hrs`:"OK";
            const personAllocation = `${nameOfPerson} --> ${templateLiteral}`;
            capacity.push(personAllocation);
        }
    }
    return capacity;
}

console.log(calculateWorkload(people,todos,processData));
