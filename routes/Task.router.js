const { Router } = require("express");
const { findById, getTask, createTask, updateTask, deleteTask, findTaskByUserId } = require("../controller/Task.controller");



const TaskRouter = Router();


TaskRouter.get("/", getTask)
TaskRouter.get("/:id", findById)
TaskRouter.post("/", createTask)
TaskRouter.patch("/:id", updateTask)
TaskRouter.delete("/:id", deleteTask)
TaskRouter.get("/user/:userId", findTaskByUserId)


module.exports = { TaskRouter }