const mongoose = require('mongoose')

const User = mongoose.Schema({
    name: String,
    username: String,
    email: {
        type: String,
        required: true
    },
    description: String,
    languages: [String],
    Interests: [String],
    password: String,
    address: {
        type: Object,
        street: String,
        suite: String,
        city: String,
        zipcode: String,
    },
    phone: String,
    skill: [String],
    company: String
})


const Users =  mongoose.model('UserModel', User);
module.exports = Users;