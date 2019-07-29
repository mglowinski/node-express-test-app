const mongoose = require('mongoose');

module.exports.Address = new mongoose.Schema({
    street: String,
    postCode: String
});