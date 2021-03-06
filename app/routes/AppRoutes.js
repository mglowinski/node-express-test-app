module.exports = (app) => {
    const appController = require('../controller/AppController');

    app.route('/api/hello-world')
        .get(appController.helloWorld);

    app.route('/api/sum-of-squares')
        .get(appController.getSumOfSquares);

    app.route('/api/fib-value-iteratively')
        .get(appController.getFibonacciValueIteratively);

    app.route('/api/mongo/users')
        .get(appController.getUsersFromMongo);

    app.route('/api/mysql/users')
        .get(appController.getUsersFromMySql);
};