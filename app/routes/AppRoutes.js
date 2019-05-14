module.exports = (app) => {
    const roomControllerSecured = require('../controller/AppController');

    app.route('/api/:tenantName/secured/rooms/count')
        .get(roomControllerSecured.getRoomsCount);
};