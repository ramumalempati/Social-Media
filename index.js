require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');

const userRoutes = require("./server/routes/user.route");
const postRoutes = require("./server/routes/post.route");
const followerRoutes = require("./server/routes/follower.route");

mongoose.connect(process.env.dbURL)
    .then(console.log("DB Connected!"))
    .catch(error => console.log(error));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send("Hello!"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/follower', followerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));