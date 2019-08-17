module.exports.queryForUsersFilteredByPostCodeAndCountryName = (postCode, country) =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name, users.addressId, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN countries ON users.countryId = countries.id \ 
     WHERE addresses.postCode = '${postCode}' \
     AND countries.name = '${country}'`;

module.exports.queryForUsersFilteredByPostCode = (postCode) =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name, users.addressId, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN countries ON users.countryId = countries.id 
     WHERE addresses.postCode = '${postCode}'`;

module.exports.queryForUsersFilteredByCountry = (country) =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name, users.addressId, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN countries ON users.countryId = countries.id
     WHERE countries.name = '${country}'`;

module.exports.queryForAllUsers = () =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name, users.addressId, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN countries ON users.countryId = countries.id`;