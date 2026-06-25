import { JSX } from "react";
import { TasksType } from "./App";
import { Button } from "./Button";

type PropsType = {
  title: string;
  tasks: TasksType[];
};

export const Todolist = ({ title, tasks }: PropsType) => {
  
    const tasklist: JSX.Element[] | JSX.Element =
    tasks.length <= 0 ? (
      <span>Tasklist is emty</span>
    ) : (
      tasks.map((t) => {
        return (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone} /> <span>{t.title}</span>
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
        <Button title="All"/>
        <Button title="Active"/>
        <Button title="Completed"/>
      </div>
    </div>
  );
};
