export const updateLocalTasksStorage = (taskList) =>
  localStorage.setItem("tasks", JSON.stringify(taskList));
