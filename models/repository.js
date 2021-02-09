'use strict'

module.exports = (sequelize, DataTypes) => {
  const Repository = sequelize.define('Repository', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    bookId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  })

    Repository.associate = models => {
        Repository.belongsTo(models.Book)
        models.Book.hasMany(Repository)  
    }

    return Repository
}
