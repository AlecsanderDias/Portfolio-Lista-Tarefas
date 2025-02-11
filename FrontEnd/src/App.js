import { useState, useEffect } from "react";
import List from "./ListTask.js";
import CreateTask from "./CreateTask.js";
import { getTasks } from "./Data/Tasks.js";

export default function App() {
    let [list, setList] = useState([]);

    function updateTasks() {
        const update = async () => {
            const res = await getTasks();
            setList(res);
        }
        update();
    }
    
    useEffect(() => {
        const result = async() => {
            updateTasks();
        }
        result();
    }, []);

    return (
        <div className="h-screen w-full bg-slate-200 flex">
            <div className="flex flex-col bg-slate-300 m-auto p-4 rounded-md gap-5 font-mono">
                <h1 className="text-3xl font-bold">Lista de tarefas</h1>
                <CreateTask update={updateTasks}/>
                <List taskList={list} update={updateTasks}/>
            </div>
        </div>
    );
};
