
const { db } = require("../startup/config")
  module.exports = {
    "development": {
      "username": db.ADMIN,
      "password": db.PASSWORD_DEV,
      "database": db.DATABASE_DEV,
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": db.ADMIN,
      "password": db.PASSWORD_PROD,
      "database": db.DATABASE_PROD,
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
  