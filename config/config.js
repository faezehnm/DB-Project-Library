require('dotenv').config()

module.exports = {
  development: {
    username: "root",
    password: "",
    database: "library_development",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "",
    database: "library_test",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "",
    database: "library-production",
    host: "localhost",
    dialect: "mysql"
  }
}
