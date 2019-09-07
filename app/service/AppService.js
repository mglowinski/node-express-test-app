const User = require('../database/models/User');
const mySqlConnector = require('../database/mysql/MySqlConnector');
const Queries = require('../database/mysql/Queries');

module.exports.getSumOfSquares = async (n) => {
    if (!n) {
        n = 10;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += (i * i);
    }
    return sum;
};

module.exports.getFibonacciSeriesRecursively = async (n) => {
    const results = [];

    if (!n) {
        n = 10;
    }

    for (let i = 0; i < n; i++) {
        results.push(fib(i));
    }

    return results;
};

module.exports.getFibonacciValueIteratively = async (n) => {
    if (!n) {
        n = 10;
    }

    if (n <= 1) {
        return n;
    }

    let fib = 1;
    let prevFib = 1;

    for (let i = 2; i < n; i++) {
        const temp = fib;
        fib += prevFib;
        prevFib = temp;
    }

    return fib;
};

module.exports.getUsersFromMongo = async (postCode, country) => {
    return User.find({
        ...postCode && {
            'address.postCode': postCode
        },
        ...country && {
            'country.name': country
        }
    });
};

module.exports.getUsersFromMySql = async (postCode, country) => {
    let query;

    if (postCode && country) {
        query = Queries.queryForUsersFilteredByPostCodeAndCountryName(postCode, country);
    } else if (postCode) {
        query = Queries.queryForUsersFilteredByPostCode(postCode);
    } else if (country) {
        query = Queries.queryForUsersFilteredByCountry(country);
    } else {
        query = Queries.queryForAllUsers();
    }

    return await mySqlConnector.createQuery(query);
};

module.exports.getUsersAddressesFromMySql = async () => {
    const query = `SELECT users.id, users.addressId, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN countries ON users.countryId = countries.id`;
    return await mySqlConnector.createQuery(query);
};

function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    } else {
        return n;
    }
}