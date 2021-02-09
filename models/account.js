'use strict'

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt:DataTypes.DATE ,
    stock: DataTypes.FLOAT,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    type: DataTypes.STRING,
    nationalId: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.TEXT
  })

  return Account
}
