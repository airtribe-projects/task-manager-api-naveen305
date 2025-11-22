import * as taskService from "../services/taskService.js"

export const getTasks = async (req,res) => {
    const tasks = taskService.getAllTasks();
    res.send(tasks)
}

export const getTask = async (req,res) => {
    const id = Number(req.params.id);
    const task = taskService.getTaskById(id);
    if(!task) {
        return res.status(404).send('Task Not Found')
    }
    res.json(task)
}