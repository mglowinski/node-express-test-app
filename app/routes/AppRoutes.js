module.exports = (app) => {
    const roomControllerSecured = require('../controller/AppController');

    app.route('/api/fibonacci-series')
        .get(roomControllerSecured.getFibonacciSeries);
};