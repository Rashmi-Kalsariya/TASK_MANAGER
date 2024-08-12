const { Router } = require("express")
const { CreateUser, LoginData } = require("../controller/user.controller")
const isValid = require("../middleware/UserValid")




const userRouter = Router()


userRouter.post("/signup", isValid, CreateUser)
userRouter.post("/Login", LoginData)




module.exports = userRouter