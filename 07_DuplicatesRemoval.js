import { todos, processData } from "./details.js";

function findDuplicateTask(todos, processData){
    processData();
    const titleCount = {};
    const duplicateTitles = {};
    const titleDifference = {};
    for(let tasks of todos){
        
        let taskTitle = tasks["title"];
        const taskId = tasks["id"];
        const alteredTaskTitle = taskTitle.replaceAll(" ","");
        
        titleDifference[alteredTaskTitle] = taskTitle;
        
        if(!titleCount[alteredTaskTitle]) titleCount[alteredTaskTitle] = [taskId];
        else titleCount[alteredTaskTitle].push(taskId);
    }
    
    for(let titles in titleCount){
        if(titleCount[titles].length > 1) duplicateTitles[titleDifference[titles]] = titleCount[titles];
    }
    return duplicateTitles;
}

console.log(findDuplicateTask(todos,processData));
