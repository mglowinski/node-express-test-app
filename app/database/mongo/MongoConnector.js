const mongoose = require('mongoose');
const mongoConfiguration = require('./MongoProperties');

mongoose.set('useFindAndModify', false);

const dbURI = "mongodb://" +
    mongoConfiguration.host + ":" +
    mongoConfiguration.port + "/" +
    mongoConfiguration.name;

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('error', (err) => {
    if (err) {
        throw err;
    }
});

mongoose.Promise = global.Promise;

module.exports = {
    mongoose,
    dbURI,
    models: {
        User: require('../models/User')
    }
};