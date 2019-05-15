module.exports = (app) => {
    const appController = require('../controller/AppController');

    app.route('/api/hello-world')
        .get(appController.helloWorld);

    app.route('/api/sum-of-squares')
        .get(appController.getSumOfSquares);

    app.route('/api/fib-series-recursively')
        .get(appController.getFibonacciSeriesRecursively);

    app.route('/api/fib-series-iteratively')
        .get(appController.getFibonacciSeriesIteratively);
};