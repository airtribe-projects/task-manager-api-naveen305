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

export const updateTask = (id, { title, description, completed }) => {
    const taskIndex = data.tasks.findIndex(task => task.id === id);
    if(taskIndex === -1) return null;

    const existingTask = data.tasks[taskIndex];
    data.tasks[taskIndex] = {
        ...existingTask,     
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(completed !== undefined && { completed })
      };
    
      return data.tasks[taskIndex];


}

export const deleteTask = (id) => {
    const index = data.tasks.findIndex((task) => task.id === id);
    if (index === -1) return false;
  
    data.tasks.splice(index, 1); 
    return true;
  };