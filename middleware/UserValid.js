const isValid = (req, res, next) => {
    let { username, email, password } = req.params;
    if (username && email && password) {
        next();
    } else {
        return res.status(400).json({ error: "InCompleted UserData." });
    }
};

module.exports = isValid;