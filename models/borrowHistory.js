'use strict'

module.exports = (sequelize, DataTypes) => {
  const BorrowHistory = sequelize.define('BorrowHistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    bookId: DataTypes.INTEGER,
    acountId: DataTypes.INTEGER,
    getDate: DataTypes.DATE ,
    returnDate: DataTypes.DATE ,
    deadLine: DataTypes.DATE,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
  })
  
    BorrowHistory.associate = models => {
        BorrowHistory.belongsTo(models.Book)
        models.Book.hasMany(BorrowHistory)  

        BorrowHistory.belongsTo(models.Account)
        models.Account.hasMany(BorrowHistory)  
    }

  return BorrowHistory
}
