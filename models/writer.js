'use strict'

module.exports = (sequelize, DataTypes) => {
  const Writer = sequelize.define('Writer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING
  })

  return BookWriter
}