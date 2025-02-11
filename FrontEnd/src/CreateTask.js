import { useEffect, useState } from "react";
import { postTask } from "./Data/Tasks";

export default function CreateTask({update}) {
    let [taskDescription, setTaskDescription] = useState("");
    function createTask() {
        if(taskDescription.length > 3) {
            const taskResult = async() => {
                const res = await postTask({description: taskDescription, isDone:false});
                update();
                document.getElementById("taskInput").value = "";
                setTaskDescription("");
            }
            taskResult();
        }
    }
    return (
        <div className="flex justify-between">
            <input className="w-full rounded-l-md p-2" id="taskInput" type="text" onChange={(ev) => setTaskDescription(ev.target.value)}/>
            <button 
                className="bg-green-700 text-white p-2 rounded-r-md hover:bg-green-800"
                onClick={() => createTask()}    
            >Criar</button>
        </div>
    );
};
