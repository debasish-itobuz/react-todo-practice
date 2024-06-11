import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";

export default function Item({item, handleEdit, handleDelete , setChange, setDelTask}) {

  async function handleDelete(id){
    const response = await axios({method:"delete", url:`http://localhost:8000/todo/delete/?id=${id}`})
    if(response.status === 200){
      setChange(prev => !prev);
      setDelTask(id)
    }
  }

  return (
    <li className=" flex justify-between mx-auto w-96 border border-gray-400 mt-2 p-3 rounded-sm">
      <div className="w-[70%] overflow-scroll no-scrollbar flex text-start">
        <p className="text-ellipsis text-nowrap">{item.title}</p>
      </div>
      <div className="flex gap-3 w-[20%] ">
        <button className="text-2xl" onClick={()=> handleEdit(item)}><FaRegEdit/></button>
        <button className="text-2xl" onClick={()=> handleDelete(item._id)}><RiDeleteBinLine/></button>
      </div>
    </li>
  )
} 