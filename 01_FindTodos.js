import { todos, processData } from "./details.js";

function findTodos(todos, processData) {
  processData();
  const filteredTodos = todos.reduce((tasksArray, items) => {

    if (
      items["id"] &&
      items["priority"] !== "low" &&
      items["status"] !== "done"
    ) {
      const taskId = items["id"];
      const taskTitle = items["title"];
      const taskAssigneeId = items["assigneeId"];

      tasksArray.push({id: taskId, title: taskTitle, assigneeId: taskAssigneeId,
      });
    }
    
    return tasksArray;
  
    },[]);

  return filteredTodos;
}
console.log(findTodos(todos, processData));
