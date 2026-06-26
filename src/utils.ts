import { FilterType, TasksType } from "./App";

export const getfilteredTasks = (filter: FilterType, tasks: TasksType[]) => {
  return filter === "Active"
    ? tasks.filter((t) => !t.isDone)
    : filter === "Completed"
      ? tasks.filter((t) => t.isDone)
      : tasks;
};
