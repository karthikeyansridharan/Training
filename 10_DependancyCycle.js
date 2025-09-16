import {todos, processData} from "./details.js";

function containsCycle(dependencyMap, currentId, visitedList, stack){
    
    if(stack.has(currentId)) return true;
    if(visitedList.has(currentId)) return false;

    visitedList.add(currentId);
    stack.add(currentId);

    const dependsOnList = dependencyMap[currentId] || [];
    
    for(let id of dependsOnList){
        if(containsCycle(dependencyMap,id,visitedList,stack)) return true;
    };

    stack.delete(currentId);
    return false;
}

function detectCycles(todos, processData){
    
    processData();
    
    const dependencyMap = {};
    const dependencyList = todos.filter((tasks)=>tasks["dependsOn"]);
    const dependencyCycleList = [];
    
    dependencyList.forEach((tasks)=>{
        const dependsOnList = tasks["dependsOn"].map((ids)=> ids.toLowerCase());
        dependencyMap[tasks["id"].toLowerCase()] = dependsOnList;
    });

    const visitedIds = new Set();
    const stack = new Set();

    for(let taskId in dependencyMap){
        if(containsCycle(dependencyMap,taskId,visitedIds,stack)) dependencyCycleList.push(taskId);
    }
    return dependencyCycleList;
}

console.log(detectCycles(todos,processData));
