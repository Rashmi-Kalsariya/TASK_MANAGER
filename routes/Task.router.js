const { Router } = require("express");
const { getTaskData, findById, createTaskData, updateTaskData, deleteTaskData } = require("../controller/Task.controller");



const TaskRouter = Router();


TaskRouter.get("/", getTaskData)
TaskRouter.get("/:id", findById)


TaskRouter.post("/", createTaskData)
TaskRouter.patch("/:id", updateTaskData)
TaskRouter.delete("/:id", deleteTaskData)


module.exports = { TaskRouter }