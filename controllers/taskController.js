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
    res.send(task)
}


export const createTask = (req,res) => {
    const { title, description } = req.body;
    if(!title) {
        return res.status(400).send("Title is required");
    }
    if(!description) {
        return res.status(400).send("Description is required");
    }
    const newTask = taskService.createTask({title, description});
    res.status(200).send( newTask );
}

export const updateTask = (req, res) => {
    const id = Number(req.params.id);
    const { title, description, completed } = req.body;

    if(!title) {
        return res.status(400).send("Title is required");
    }
    if(!description) {
        return res.status(400).send("Description is required");
    }
  
    const updated = taskService.updateTask(id, { title, description, completed });
  
    if (!updated) {
      return res.status(404).send( "Task not found" );
    }
  
    res.send( updated );
  };

  export const deleteTask = (req, res) => {
    const deleted = taskService.deleteTask(Number(req.params.id));
  
    if (!deleted)
      return res.status(404).send("Task not found" );
  
    res.send("Task deleted successfully");
  };
  