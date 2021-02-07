'use strict'

module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define('Publisher', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    website: DataTypes.STRING,
  })

  return Publisher
}
