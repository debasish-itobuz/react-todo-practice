import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Item({item}) {

  return (
    <li className=" flex justify-between mx-auto w-96 border border-gray-400 mt-2 p-3 rounded-sm">
      <div className="w-[70%] overflow-scroll no-scrollbar flex text-start">
        <p className="text-ellipsis text-nowrap">{item.title}</p>
      </div>
      <div className="flex gap-3 w-[20%] ">
        <button className="text-2xl"><FaRegEdit/></button>
        <button className="text-2xl"><RiDeleteBinLine/></button>
      </div>
    </li>
  )
} 