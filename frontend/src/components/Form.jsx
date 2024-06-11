export default function Form() {

    return (
        <form className="flex justify-between border w-96 mx-auto mt-2 rounded-sm">
            <input type="text" name="todo" id="todo" placeholder="Write your task .." className="border border-indigo-200 rounded-sm p-3 focus:outline-none w-80" />
            <button className="bg-green-600 p-1 px-4 rounded-sm text-3xl">+</button>
        </form>
    )
}