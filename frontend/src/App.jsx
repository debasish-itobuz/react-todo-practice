import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {

const [change, setChange] = useState(false);
const [editTask, setEditTask] = useState(null)
const [delTask, setDelTask] = useState(null)

function handleEdit(item){
  setEditTask(item)
}

  return (
    <>
      <Header />
      <Form setChange={setChange} editTask={editTask} setEditTask={setEditTask} delTask={delTask} />
      <TodoList change={change} handleEdit={handleEdit} setChange={setChange} setDelTask={setDelTask}  />
    </>
  )
}

export default App