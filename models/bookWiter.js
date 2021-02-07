'use strict'

module.exports = (sequelize, DataTypes) => {
  const BookWiter = sequelize.define('BookWiter', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    bookId: DataTypes.INTEGER,
    witerId: DataTypes.INTEGER
  })

  BookWiter.associate = models => {
    BookWiter.belongsTo(models.Book)
    BookWiter.belongsTo(models.Writer)
    models.Book.hasMany(BookWiter)
    models.Writer.hasMany(BookWiter)
  }

  return BookWiter
}
