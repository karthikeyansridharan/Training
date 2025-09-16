import { people,todos,processData } from "./details.js";

export function calculateEstimatedHours(people,todos,processData){
    
    processData();
    const timeEstimation = [];
    for(let person of people){
        if(!person) continue;
        const personName = person["name"];
        const personId = person["id"];
        if(personId && personName){
            const timeEstimationForOnePerson = {"person":"", "hrs":0};
            let hrs = 0;
            for(let tasks of todos){
                
                if(!tasks["id"] && !tasks["status"] && !tasks["assigneeId"]) continue;
                if(tasks["assigneeId"] === personId && tasks["status"] !== "done"){
                    hrs += tasks["estimateHrs"];
                } 
            }
            timeEstimationForOnePerson["person"] = personName;
            timeEstimationForOnePerson["hrs"] += hrs;
            timeEstimation.push(timeEstimationForOnePerson);
        }
    };
    const timeEstimationForUnassigned = {};
    let nullHrs = 0;
    let isContainsUnassigned = false;
    for(let tasks of todos){
        if(tasks["assigneeId"]===null){
            isContainsUnassigned = true;
            nullHrs += tasks["estimateHrs"];
        } 
    }
    if(isContainsUnassigned){
        timeEstimationForUnassigned["person"] = "Unassigned";
        timeEstimationForUnassigned["hrs"] = nullHrs;
        timeEstimation.push(timeEstimationForUnassigned);
    }
    return timeEstimation;
}

console.log(calculateEstimatedHours(people,todos,processData));

