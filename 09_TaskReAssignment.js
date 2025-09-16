import { todos, people, processData } from "./details.js";
import { calculateEstimatedHours } from "./03_EstimatedHoursForTask.js";

function reAssignTask(todos, people, processData, calculateEstimatedHours) {
    processData();
    const workAssignedHrs = {};
    const peopleWithZeroCapacity = {};
    const suggessionArray = [];

    for (let person of people) {
        const capacity = person["capacityHrsPerDay"];
        const name = person["name"];
        const id = person["id"];
        if (capacity === 0) {
            let taskArray = [];
            for(let tasks of todos){
                if(tasks["assigneeId"] === id && tasks["status"] !== "done"){
                    taskArray.push(tasks["id"]);
                }
                peopleWithZeroCapacity[name] = taskArray;
            } 
        }
    }

    calculateEstimatedHours(people, todos, processData).forEach((person) => {
        workAssignedHrs[person["person"]] = person["hrs"];
    });

    const peopleRemainingCapacity = {};
    for (let person of people) {
        peopleRemainingCapacity[person["name"]] = person["capacityHrsPerDay"] * 5;
    }

    for (let person in peopleRemainingCapacity) {
        peopleRemainingCapacity[person] -= workAssignedHrs[person];
    }

    for(let person in peopleWithZeroCapacity){
        const personName = person;
        const personDetail = peopleWithZeroCapacity[person];
        const extraWork = workAssignedHrs[person];
        
        for(let personCapacity in peopleRemainingCapacity){
            const currentPersonWorkHrs = peopleRemainingCapacity[personCapacity];
            if(currentPersonWorkHrs >= extraWork){
                suggessionArray.push({"todoId" : personDetail, "fromPerson" : `${personName}`, "toPersonSuggested" : `${personCapacity}`});
                peopleRemainingCapacity[personCapacity] -= currentPersonWorkHrs;
                workAssignedHrs[personName] = 0;
                break;
            }
        }
    }
    
    return suggessionArray;
}

console.log(reAssignTask(todos, people, processData, calculateEstimatedHours));
