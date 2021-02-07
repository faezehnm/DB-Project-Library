'use strict'

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    page: DataTypes.INTEGER,
    price: DataTypes.FLOAT ,
    publisherId: DataTypes.INTEGER,
    section: DataTypes.INTEGER,
    tiraj: DataTypes.INTEGER
  })

    Book.associate = models => {
        Book.belongsTo(models.Publisher)
        models.Publisher.hasMany(Book)
    }

  return Book
}
