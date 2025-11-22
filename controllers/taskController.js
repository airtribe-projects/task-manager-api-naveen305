import * as taskService from "../services/taskService.js"

export const getTasks =  (req,res) => {
    const tasks = taskService.getAllTasks();
    res.send(tasks)
}

export const getTask =  (req,res) => {
    const id = Number(req.params.id);
    const task = taskService.getTaskById(id);
    if(!task) {
        return res.status(404).send('Task Not Found')
    }
    res.json(task)
}


export const createTask = (req,res) => {
    const { title, description } = req.body;
    if(!title) {
        return res.status(400).json("Title is required");
    }
    const newTask = taskService.createTask({title, description});
    res.status(200).json( newTask );
}