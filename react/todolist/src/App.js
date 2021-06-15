import { useState } from "react"
import './App.css';
import { TodoList } from "./components/TodoList.js"

function App() {
  const defaultListItems = [
    {name: 'Tarefa 1', isCompleted: false},
    {name: 'Tarefa 2', isCompleted: false},
    {name: 'Tarefa 3', isCompleted: false},
    {name: 'Tarefa 4', isCompleted: false},
    {name: 'Tarefa 5', isCompleted: false},
  ]
  const[items, setItems] = useState(defaultListItems)
  return (
    <section>
      <h1>Custom TODO-List</h1>
      <TodoList list={items} />
    </section>
  );
}

export default App;
