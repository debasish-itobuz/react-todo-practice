import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {

const [change, setChange] = useState(false)

  return (
    <>
      <Header />
      <Form setChange={setChange} />
      <TodoList change={change} />
    </>
  )
}

export default App