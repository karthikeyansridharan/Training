import {people,todos,processData} from "./details.js";

function fetchTasks(people, todos, processData){

    processData();

    const peopleObject = {};
    for(let person of people){
        if(!peopleObject[person["id"]]) peopleObject[person["id"]] = person["name"];
    }
    
    let todaysDate = new Date();
    let tasksOnDue = todos.filter((tasks)=>{
        if(tasks["id"] && tasks["status"] && tasks["due"]){
            const taskDue = new Date(tasks["due"]);
            return (taskDue<=todaysDate && tasks["status"] !== "done");
        }
        return false;
    }).map((task)=>{
        return {"id":task["id"],"title":task["title"],"assineeName":peopleObject[task["assigneeId"]],"due":task["due"]};
    });

    return tasksOnDue;
    
}

console.log(fetchTasks(people,todos,processData));
