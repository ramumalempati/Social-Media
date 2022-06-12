const express = require("express");
const User = require("../models/user");
const router = express.Router();

router
    .post("/login", async (req, res) => {
        try {
            const user = await User.login(req.body.userName, req.body.password);
            res.send({ ...user._doc, password: undefined });
        }
        catch (error) {
            res.status(401).send({ message: error.message });
        }
    });

router
    .post("/register", async (req, res) => {
        try {
            const user = await User.register(req.body.userName, req.body.password);
            res.send({ ...user._doc, password: undefined });
        }
        catch (error) {
            res.status(401).send({ message: error.message });
        }
    });

router
    .put("/update", async (req, res) => {
        try {
            const user = await User.updatePassword(req.body.userName, req.body.password);
            res.send({ ...user._doc, password: "" });
        }
        catch (error) {
            res.status(401).send({ message: error.message });
        }
    });

router
    .delete("/delete", async (req, res) => {
        try {
            const user = await User.deleteUser(req.body.userId);
            res.send({
                success: "Account deleted. Bye, hope we will meet again soon 🙂"
            });
        }
        catch (error) {
            res.status(401).send({ message: error.message });
        }
    });

module.exports = router;