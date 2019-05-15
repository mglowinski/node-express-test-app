const roomService = require('../service/AppService');

module.exports.helloWorld = async (req, res) => {
    return res.json({
        hello: 'world'
    });
};

module.exports.getFibonacciSeriesRecursively = async (req, res) => {
    try {
        const fibonacciSeries = await roomService.getFibonacciSeriesRecursively(req.query.n);
        return res.send(fibonacciSeries);
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};

module.exports.getFibonacciSeriesIteratively = async (req, res) => {
    try {
        const fibonacciSeries = await roomService.getFibonacciSeriesIteratively(req.query.n);
        return res.send(fibonacciSeries);
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};