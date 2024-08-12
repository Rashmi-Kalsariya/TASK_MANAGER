const isValid = (req, res, next) => {
    let { name, email, password } = req.body;

    if (name && email && password) {
        next();
    } else {
        return res.status(400).json({ error: "InCompleted UserData." });
    }
};

module.exports = isValid;