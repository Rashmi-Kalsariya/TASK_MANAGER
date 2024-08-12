const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: String,
    status: { type: Boolean, default: false },
    userId: String
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;