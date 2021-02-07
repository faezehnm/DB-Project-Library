require('dotenv').config()

module.exports = {
  development: {
    username: "root",
    password: "test",
    database: "database_development",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "test",
    database: "database_test",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "test",
    database: "database_library",
    host: "localhost",
    dialect: "mysql"
  }
}
