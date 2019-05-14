const roomService = require('../service/AppService');

module.exports.getFibonacciSeries = async (req, res) => {
    try {
        const fibonacciSeries = await roomService.getFibonacciSeries(req.query.n);
        return res.send(fibonacciSeries);
    } catch (error) {
        return res.status(500).send({
            message: error.message
        });
    }
};