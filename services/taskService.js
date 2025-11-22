import data from "../data/task.json" assert { type: "json" };

export const getAllTasks = () => {
    return data.tasks;
}

export const getTaskById = (id) => {
    return data.tasks.find(task => task.id === id)
}

export const createTask = ({title, description}) => {
    const newTask = {
        id: data.tasks.length + 1,
        title,
        description,
        completed: false
    }
    data.tasks.push(newTask);
    return newTask
}