'use strict'

module.exports = (sequelize, DataTypes) => {
  const BookCategory = sequelize.define('BookCategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    categoryId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  })

    BookCategory.associate = models => {
        BookCategory.belongsTo(models.Category)
        models.Category.hasMany( BookCategory)
    }

  return BookCategory
}
