const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        min: 6
    },

})

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;