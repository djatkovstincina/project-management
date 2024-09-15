import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    const emptyInput = enteredTask.trim('') === '';

    function handleChange(event) {
        setEnteredTask(event.currentTarget.value);
    }

    function handleClick() {
        if(emptyInput) {
            return
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input 
                type="text" 
                className="w-64 py-1 px-2 rounded-sm bg-stone-200" 
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                disabled={emptyInput}
                className="text-stone-700 hover:text-stone-950"    
                onClick={handleClick}
            >Add Task</button>
        </div>
    )
}