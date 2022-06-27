//Import mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Create schema 
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//Create model
const User = mongoose.model("User", userSchema);

//CRUD functions
//Create
async function register(userName, password) {
    const user = await getUserByUserName(userName);
    if (user) {
        throw Error("An early bird has already taken the username, try a different one 😉");
    }
    const slat = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, slat);
    const newUser = await User.create({
        userName: userName,
        password: hashedPassword
    });
    return newUser;
}

//Read
async function login(userName, password) {
    const user = await getUserByUserName(userName);
    if (!user) {
        throw Error("Sorry, I can't find you! Please register 🙂");
    }
    if (!await bcrypt.compare(password, user.password)) {
        throw Error("Oops! that's a wrong password, please check again 🤗");
    }
    return user;
}

//Update
async function updatePassword(userName, password) {
    const user = await User.updateOne({ "userName": userName }, {
        $set: {
            password: password
        }
    });
}

//Delete
async function deleteUser(id) {
    await User.deleteOne({ "_id": id });
}

//Other common operations
async function getUserByUserName(userName) {
    return await User.findOne({ "userName": userName });
}

//Export public methods
module.exports = {
    register, login, updatePassword, deleteUser
}