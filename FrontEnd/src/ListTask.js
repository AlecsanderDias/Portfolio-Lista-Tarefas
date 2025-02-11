import { useState } from "react";
import TrashIconSVG from "./TrashIconSVG";
import { deleteTask } from "./Data/Tasks.js";
import EditIconSVG from "./EditIconSVG.js";
import UpdateTask from "./UpdateTask.js";


export default function List({taskList, update}) {
    return(
        <ul className="flex flex-col p-2 gap-3 font-medium">
            {taskList.map((list) => (
                <ListTask key={list.id} id={list.id} description={list.description} isDone={list.isdone} update={update}/>
            ))}
        </ul>
    );
};

export function ListTask({
    id,
    description,
    isDone,
    update
}) {
    let [isComplete, setIsComplete] = useState(isDone);
    let [isEditing, setIsEditing] = useState(false);
    function taskDelete(id) {
        const response = async () => {
            const res = await deleteTask(id);
            update();
        }
        response();
    }
    
    return (
        <li id={id} className="bg-white rounded-md flex p-2 gap-2" >
            <UpdateTask isComplete={isComplete} isEditing={isEditing} description={description} setIsComplete={setIsComplete} setIsEditing={setIsEditing} id={id} update={update}/>            
            <div className="flex gap-1">
                <button onClick={() => setIsEditing(!isEditing)}>
                    <EditIconSVG/>
                </button>
                <button onClick={() => taskDelete(id)}>
                    <TrashIconSVG/>
                </button>
            </div>
        </li>
    );
};
