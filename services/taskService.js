import data from "../data/task.json" assert { type: "json" };

export const getAllTasks = () => {
    return data.tasks;
}

export const getTaskById = (id) => {
    return data.tasks.find(task => task.id === id)
}