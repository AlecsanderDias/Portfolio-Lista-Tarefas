const url = process.env.REACT_APP_BACKEND_URL;
// const url = "backend:8000/task";

const getTasks = async () => {
    const response = await fetch(url);
    return response.json();
}

const postTask = async (task) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({...task}) 
    });
    return response.json();
}

const getOneTask = async (id) => {
    const response = await fetch(`${url}/${id}`);
    return response.json();
}

const updateTask = async (id, task) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({...task})
    });
    return response.json();
}

const deleteTask = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}

export { getTasks, postTask, getOneTask, updateTask, deleteTask };