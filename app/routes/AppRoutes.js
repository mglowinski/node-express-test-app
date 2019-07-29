module.exports = (app) => {
    const appController = require('../controller/AppController');

    app.route('/api/hello-world')
        .get(appController.helloWorld);

    app.route('/api/sum-of-squares')
        .get(appController.getSumOfSquares);

    app.route('/api/fib-series-recursively')
        .get(appController.getFibonacciSeriesRecursively);

    app.route('/api/fib-value-iteratively')
        .get(appController.getFibonacciValueIteratively);

    app.route('/api/mongo/users')
        .get(appController.getUsers);

    app.route('/api/mongo/users/addresses')
        .get(appController.getUsersAddresses);
};