import { useState } from "react";
import "./App.css";
import { Todolist } from "./todolist";
import { getfilteredTasks } from "./utils";

export type TasksType = {
  id: number;
  title: string;
  isDone: boolean;
};

export type FilterType = "All" | "Active" | "Completed";

function App() {
  
  //data
  const todolistTitle1 = "What to learn";

  const [tasks, setTasks] = useState<TasksType[]>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ]);

  const [filter, setFilter] = useState<FilterType>("All");

  const deleteTask = (taskId: TasksType["id"]) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const changeFilter = (filterName: FilterType) => {
    setFilter(filterName);
  };
  //

  return (
    <div className="app">
      <Todolist
        title={todolistTitle1}
        tasks={getfilteredTasks(filter, tasks)}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
