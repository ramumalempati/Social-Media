const express = require("express");
const Follower = require("../models/follower");
const router = express.Router();

router
    .post("/follow", async (req, res) => {
        try {
            const follower = await Follower.follow(req.body.followerId, req.body.followeeId);
            res.send(follower);
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

router
    .delete("/unfollow", async (req, res) => {
        try {
            await Follower.unfollow(req.body.followerId, req.body.followeeId);
            res.status(200).send({ success: "Unfollow successful 🙂" });
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

router
    .get("/get", async (req, res) => {
        try {
            const followers = await Follower.getFollowers(req.body.userId);
            res.send(followers);
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

module.exports = router;