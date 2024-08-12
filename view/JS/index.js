const Task = require("../../models/Task.schema");

const PostData = async (user) => {
    try {
        let req = await fetch("http://localhost:8090/tasks", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        });

        let res = await req.json();
        console.log("Post Response:", res);
        fetchTasks();
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

const fetchTasks = async () => {
    try {
        let req = await fetch("http://localhost:8090/tasks", {
            method: 'GET',
            headers: { "content-type": "application/json" }
        });

        let tasks = await req.json();
        displayTasks(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};

const displayTasks = (tasks) => {
    const taskList = document.getElementById('TaskList');
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `Task: ${task.Task}`;
        taskList.appendChild(taskItem);
    });
};

const handleData = (e) => {
    e.preventDefault();
    let data = {
        task: document.getElementById('task').value,
        userId: userId
    };
    PostData(data);
};

document.addEventListener('DOMContentLoaded', fetchTasks);

document.getElementById("TaskData").addEventListener("submit", handleData);

let id = document.cookie;
let userId = id.split("=")[1];

console.log(userId);
if (!userId) {
    window.location.href = "http://127.0.0.1:5500/view/login.html";
}
