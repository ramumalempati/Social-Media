//Import mongoose
const mongoose = require("mongoose");

//Create schema 
const follower = new mongoose.Schema({
    followee: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    follower: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
});

//Create model
const Following = mongoose.model("Following", follower);

//CRUD functions

//Create
async function follow(followerId, followeeId) {
    if (!await Following.findOne({ "follower": followerId, "followee": followeeId })) {
        const following = await Following.create({
            follower: followerId,
            followee: followeeId
        });
        return following;
    }
    throw Error("You are already following the user!");
}

//Delete
async function unfollow(followerId, followeeId) {
    await Following.deleteOne({ "follower": followerId, "followee": followeeId });
}

//Read
async function getFollowers(userId) {
    const query = await Following.find({ "followee": userId }, { "followee": 0, "_id": 0, "__v": 0 })
        .populate("follower", { "__v": 0, "password": 0 });
    const res = [];
    for await (const following of query) {
        res.push(following._doc.follower);
    }
    return res;
}
//Export public methods
module.exports = {
    follow, unfollow, getFollowers
}