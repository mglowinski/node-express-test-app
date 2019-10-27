const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/database/mongo/MongoConnector');
require('./app/database/mysql/MySqlConnector');
require('./app/routes/AppRoutes')(app);

const port = process.env.PORT || 8040;

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port, () => {
    console.debug('Server started on: ' + port);
});
