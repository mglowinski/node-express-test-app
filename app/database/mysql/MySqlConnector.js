const mysql = require('mysql');
const MySqlProperties = require('./MySqlProperties');

const pool = mysql.createPool({
    host: MySqlProperties.host,
    port: MySqlProperties.port,
    user: MySqlProperties.user,
    password: MySqlProperties.password,
    database: MySqlProperties.database
});

module.exports.getConnection = (callback) => {
    pool.getConnection((err, connection) => {
        callback(err, connection);
    });
};

module.exports.createQuery = (query) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            connection.query(query, (error, results, fields) => {
                connection.release();
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    });
};