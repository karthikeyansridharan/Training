import { todos, processData } from "./details.js";

function isAvailable(taskId) {
    let check = true;
  for (let lists of todos) {
    if (lists["id"]===taskId) return true;
  }
  return false;
}

function getTask(taskId) {
    for(let tasks of todos){
        if(taskId === tasks["id"]){
            return {"id":tasks["id"],"title":tasks["title"],"dependsOn":tasks["dependsOn"]};
        }
    }
}

function filterNonDependantTasks(todos, processData) {
  processData();
  const dependancyTasks = {};
  const dependentTasksArray = [];
  for (let tasks of todos) {
    if (!tasks["dependsOn"]) continue;
    dependancyTasks[tasks["id"]] = tasks["dependsOn"];
  }
  
  
  for (let taskId in dependancyTasks) {
    let availability = true;
    for (let dependentTaskId of dependancyTasks[taskId]) {
      if (!isAvailable(dependentTaskId.toLowerCase())) availability = false;
    }
    if (!availability) {
        const task = getTask(taskId);
        
      dependentTasksArray.push(task);
      availability = true;
    }
  }
  return dependentTasksArray;
}

console.log(filterNonDependantTasks(todos, processData));
