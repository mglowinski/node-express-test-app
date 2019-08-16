const appService = require('../service/AppService');

module.exports.helloWorld = async (req, res) => {
    return res.json({
        hello1: 'world1',
        hello2: 'world2',
        hello3: 'world3',
        hello4: 'world4',
        hello5: 'world5',
        hello6: 'world6'
    });
};

module.exports.getSumOfSquares = async (req, res) => {
    try {
        const sumOfSquares = await appService.getSumOfSquares(req.query.n);
        return res.send({
            sumOfSquares: sumOfSquares
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

module.exports.getFibonacciSeriesRecursively = async (req, res) => {
    try {
        const fibonacciSeries = await appService.getFibonacciSeriesRecursively(req.query.n);
        return res.send(fibonacciSeries);
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

module.exports.getFibonacciValueIteratively = async (req, res) => {
    try {
        const fibonacciSeries = await appService.getFibonacciValueIteratively(req.query.n);
        return res.send({
            fibValue: fibonacciSeries
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

module.exports.getUsersFromMongo = async (req, res) => {
    try {
        const users = await appService.getUsersFromMongo(req.query.postCode, req.query.country);
        return res.send(users);
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

module.exports.getUsersAddressesFromMongo = async (req, res) => {
    try {
        const users = await appService.getUsersFromMongo();
        return res.send(users.map(user => user.address));
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

module.exports.getUsersFromMySql = async (req, res) => {
    try {
        const users = await appService.getUsersFromMySql(req.query.postCode, req.query.country);
        return res.send(users);
    } catch (error) {
        return res.status(500).send({
            message: error
        });
    }
};