import { useEffect, useState } from "react"
import axios from 'axios'
import Item from "./Item"

export default function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios({ method: "get", url: 'http://localhost:8000/todo/get' })
      // console.log(response.data.data)
      setTodos(response.data.data)
    } fetchData()
  }, [])

  return (
    <ol className="todoList text-center mt-3 overflow-y-scroll h-[81vh]">
      {todos.length > 0 ? (todos.map((item) => <Item key={item._id} item={item} /> )) : ( <p>Seems lonely in here, what are you up to?</p>)}
    </ol>
  )
}
