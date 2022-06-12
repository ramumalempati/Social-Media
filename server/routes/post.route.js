const express = require("express");
const Post = require("../models/post");
const router = express.Router();

router
    .post("/create", async (req, res) => {
        try {
            const post = await Post.create(req.body.authorId, req.body.postText);
            res.send(post);
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

router
    .get("/get", async (req, res) => {
        try {
            const post = await Post.get(req.body.postId);
            if (post) {
                res.send(post);
            } else {
                res.status(404).send({ message: "Sorry, I can't find the post 😔" })
            }
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

router
    .get("/getByAuthor", async (req, res) => {
        try {
            const post = await Post.getByAuthor(req.body.authorId);
            res.send(post);
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

router
    .put("/update", async (req, res) => {
        try {
            const post = await Post.updatePost(req.body.postId, req.body.postText);
            res.send(post);
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

router
    .delete("/delete", async (req, res) => {
        try {
            const post = await Post.deletePost(req.body.postId);
            res.send({
                success: "Post deleted 🙂"
            });
        }
        catch (error) {
            res.status(500).send({ message: error.message });
        }
    });

module.exports = router;