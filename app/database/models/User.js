const mongoose = require('mongoose');
const {Address} = require('./Address');
const {Country} = require('./Country');

const User = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    username: String,
    firstName: String,
    lastName: String,
    countries: [Country],
    address: Address
}, {
    versionKey: false
});

module.exports = mongoose.model('User', User);

