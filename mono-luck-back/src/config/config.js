require('dotenv').config();
module.exports = {
    "development": {
        "use_env_variable": "DATABASE_URL",
        "protocol": "postgres",
        "dialect": "postgres",
        "dialectOptions": {"ssl": {"require": true,"rejectUnauthorized": false}} 
    },
    "test": {
        "use_env_variable": "DATABASE_URL",
        "protocol": "postgres",
        "dialect": "postgres",
        "dialectOptions": {"ssl": {"require": true,"rejectUnauthorized": false}} 
    },
    "production": {
        "use_env_variable": "DATABASE_URL",
        "protocol": "postgres",
        "dialect": "postgres",
        "dialectOptions": {"ssl": {"require": true,"rejectUnauthorized": false}} 
    }
};
