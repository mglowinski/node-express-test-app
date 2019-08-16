module.exports.queryForUsersFilteredByPostCodeAndCountryName = (postCode, country) =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name as countryName, addresses.id, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN users_countries uc ON users.id = uc.userId \ 
     INNER JOIN countries ON countries.id = uc.countryId \
     WHERE addresses.postCode = '${postCode}' \
     WHERE countries.name = '${country}'`;

module.exports.queryForUsersFilteredByPostCode = (postCode) =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name as countryName, addresses.id, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN users_countries uc ON users.id = uc.userId \ 
     INNER JOIN countries ON countries.id = uc.countryId \
     WHERE addresses.postCode = '${postCode}'`;

module.exports.queryForUsersFilteredByCountry = (country) =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name as countryName, addresses.id, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN users_countries uc ON users.id = uc.userId \ 
     INNER JOIN countries ON countries.id = uc.countryId \
     WHERE countries.name = '${country}'`;

module.exports.queryForAllUsers = () =>
    `SELECT users.id, users.username, users.firstName, users.lastName, countries.name as countryName, addresses.id, addresses.street, addresses.postCode FROM users \ 
     INNER JOIN addresses ON users.addressId = addresses.id \ 
     INNER JOIN users_countries uc ON users.id = uc.userId \ 
     INNER JOIN countries ON countries.id = uc.countryId`;