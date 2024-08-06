const express = require("express");
const dbconnect = require("./config/db");



const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const { TaskRouter } = require("./routes/Task.router");


app.use(express.json())


app.use(cors())

app.get("/", (req, res) => {
    res.send("Working Request....")
})
app.use("/user",userRouter)
app.use("/tasks",TaskRouter)


app.listen(8090, () => {

    console.log("Listening on Port 8090");
    dbconnect()
})
