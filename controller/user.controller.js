
const User = require("../models/user.schema");



const GetUser = async (req, res) => {
    let data = await User.find()

    res.send(data)
}


const CreateUser = async (req, res) => {
    let data = await User.create(req.body)
    res.status(201).send(data)
}


const LoginData = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        return res.send("Invalid User Password")
    }
    res.status(200).send({ message: "Login User Successfully" });
}


module.exports = { GetUser, CreateUser, LoginData }