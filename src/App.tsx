import "./App.css";
import { Todolist } from "./todolist";


export type TasksType = {
  id: number,
  title: string,
  isDone: boolean
}


function App() {

//data
const todolistTitle1 = "What to learn"
const todolistTitle2 = "What to buy"
const todolistTitle3 = "What to eat"

const tasks2: TasksType[] = [
  {id: 1, title: "Meet", isDone: true},
  {id: 2, title: "Beer", isDone: true},
  {id: 3, title: "Milk", isDone: false},
]
const tasks1: TasksType[] = [
  {id: 1, title: "HTML&CSS", isDone: true},
  {id: 2, title: "JS", isDone: true},
  {id: 3, title: "React", isDone: false},
]
const tasks3: TasksType[] = [
  {id: 1, title: "NG1", isDone: true},
  {id: 2, title: "NG2", isDone: true},
  {id: 3, title: "NG3", isDone: false},
]
//


  return (
    <div className="app">
      <Todolist title={todolistTitle1} tasks={tasks1}/>
      <Todolist title={todolistTitle2} tasks={tasks2}/>
      <Todolist title={todolistTitle3} tasks={tasks3}/>
    </div>
  );
}

export default App;
