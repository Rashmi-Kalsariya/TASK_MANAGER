const { Router } = require("express")
const { GetUser, CreateUser, LoginData } = require("../controller/user.controller")
const isValid = require("../middleware/UserValid")




const userRouter = Router()


userRouter.get("/", GetUser)
userRouter.post("/", isValid, CreateUser)
userRouter.post("/Login", LoginData)




module.exports = userRouter