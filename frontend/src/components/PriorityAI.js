export function prioritizeTasks(tasks) {
  return tasks.map((task) => {
    if (/urgent|review/i.test(task.description)) {
      task.priority = "high";
    } else if (/later|optional/i.test(task.description)) {
      task.priority = "low";
    } else {
      task.priority = "medium";
    }
    return task;
  });
}
