//Structure des donnees
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
