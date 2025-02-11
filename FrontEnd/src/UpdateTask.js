import { useState } from "react";
import { updateTask } from "./Data/Tasks.js";

export default function UpdateTask({isEditing, isComplete, setIsComplete, setIsEditing, description, id, update}) {
    let [input, setInput] = useState(description);
    function editTask() {
        if(input.length < 3) {
            setInput(description);
            setIsEditing(!isEditing);
            return;
        }
        const edit = async() => {
            const res = await updateTask(id, {description: input, isDone: isComplete});
            update();
        }
        setInput(input);
        edit();
        setIsEditing(!isEditing);
    }
    if(isEditing) {
        return (
            <div className="flex justify-between">
                <input className="w-full rounded-l-md p-2" value={input} id="edit" type="text" onChange={(e) => setInput(e.target.value)}/>
                <button 
                    className="bg-green-700 text-white p-2 rounded-r-md hover:bg-green-800"
                    onClick={() => editTask()}    
                >Salvar</button>
            </div>
        );
    }
    return <p className={`select-none flex-grow self-center hover:cursor-pointer ${isComplete ? "line-through" : ""}`} 
        onClick={() => setIsComplete(!isComplete)}>{description}</p>;
};

        