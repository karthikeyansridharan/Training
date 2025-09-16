import { todos, processData } from "./details.js";

function sortByPriority(todos,processData){

    processData();
    const priorityMapValue = {
        "high" : 3,
        "medium" : 2,
        "low" : 1
    };

    const tempTodo = todos.filter((tasks)=>{
        return tasks["status"] !== "done";
    });

    tempTodo.sort((a,b)=>{
        const priorityOfA = a.estimateHrs;
        const priorityOfB = b.estimateHrs;
        return priorityOfA - priorityOfB;
    });
    
    tempTodo.sort((a,b)=>{
        const priorityOfA = new Date(a.due);
        const priorityOfB = new Date(b.due);
        return priorityOfA - priorityOfB;
    });

    tempTodo.sort((a, b) => {
    const priorityOfA = priorityMapValue[a.priority] || 0;
    const priorityOfB = priorityMapValue[b.priority] || 0;
    return priorityOfB - priorityOfA; 
    });

    const idArray = tempTodo.map((tasks)=>{
        return tasks["id"];
    });

    return idArray;
  
}

console.log(sortByPriority(todos,processData));
