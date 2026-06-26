import { JSX } from "react";
import { FilterType, TasksType } from "./App";
import { Button } from "./Button";

type PropsType = {
  title: string;
  tasks: TasksType[];
  deleteTask: (taskId: TasksType["id"]) => void
  changeFilter: (filterName: FilterType) => void
};

export const Todolist = ({ title, tasks, deleteTask, changeFilter }: PropsType) => {
  
    const tasklist: JSX.Element[] | JSX.Element =
    tasks.length <= 0 ? (
      <span>Tasklist is emty</span>
    ) : (
      tasks.map((t) => {
        return (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} /> <span>{t.title}</span><Button title="X" onClick={() => deleteTask(t.id)}/>
          </li>
        );
      })
    );

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title="+"/>
      </div>
      <ul>{tasklist}</ul>
      <div>
        <Button title="All" onClick={() => changeFilter("All")}/>
        <Button title="Active" onClick={() => changeFilter("Active")}/>
        <Button title="Completed" onClick={() => changeFilter("Completed")}/>
      </div>
    </div>
  );
};
