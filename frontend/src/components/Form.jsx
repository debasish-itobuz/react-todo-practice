import { useRef } from "react"
import axios from "axios"

export default function Form({ setChange, editTask, setEditTask, delTask }) {
    const inputRef = useRef()

    async function createData(value) {
        const response = await axios({ method: "post", url: 'http://localhost:8000/todo/post', data: { title: value } })
        // console.log(response)
        if (response.status === 200) {
            setChange(prev => !prev)
            inputRef.current.value = ''
        }
    }

    async function updateData(value, id) {
        const response = await axios({ method: "put", url: `http://localhost:8000/todo/update/?id=${id}`, data: { title: value } })
        console.log(response)
        if (response.status === 200) {
            setChange(prev => !prev)
            inputRef.current.value = ''
        }  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value.trim()
        console.log(value)

        if (value && !editTask) {
            createData(value)
        }

        else if (editTask) {
            if (inputRef.current.value.trim())
                updateData(inputRef.current.value.trim(), editTask._id);
                setEditTask(null)
        }
    }

    if (editTask && !delTask)
        inputRef.current.value = editTask.title;

    if(delTask && delTask === editTask?._id){
        inputRef.current.value = '';
    }

    return (
        <form className="flex justify-between border w-96 mx-auto mt-2 rounded-sm" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" name="todo" id="todo" placeholder="Write your task .." className="border border-indigo-200 rounded-sm p-3 focus:outline-none w-80" />
            <button className="bg-green-600 p-1 px-4 rounded-sm text-3xl">+</button>
        </form>
    )
}