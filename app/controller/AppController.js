const roomService = require('../service/AppService');

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
        const sumOfSquares = await roomService.getSumOfSquares(req.query.n);
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