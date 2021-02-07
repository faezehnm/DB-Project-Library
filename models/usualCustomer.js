'use strict'

module.exports = (sequelize, DataTypes) => {
  const UsualCustomer = sequelize.define('UsualCustomer', {
    accountId: DataTypes.INTEGER,
    job: DataTypes.STRING 
  })

    UsualCustomer.associate = models => {
        UsualCustomer.belongsTo(models.Account)
        models.Account.hasMany(UsualCustomer)  
    }
  return UsualCustomer
}
