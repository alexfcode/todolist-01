import "./App.css";
import { Todolist } from "./todolist";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const App = () => {
  // data

  const todolistTitle1 = "What to learn";

  const tasks1: TaskType[] = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 3, title: "REDUX", isDone: false },
    { id: 3, title: "RTK", isDone: false },
  ];

  //
  return (
    <div className="app">
      <Todolist title={todolistTitle1} tasks={tasks1} />
    </div>
  );
};
