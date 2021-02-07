'use strict'

module.exports = (sequelize, DataTypes) => {
  const StudnetCustomer = sequelize.define('StudnetCustomer', {
        accountId: DataTypes.INTEGER,
        studentNumber: DataTypes.STRING,
        university: DataTypes.STRING 
  })

    StudnetCustomer.associate = models => {
        StudnetCustomer.belongsTo(models.Account)
        models.Account.hasMany(StudnetCustomer)  
    }
  return StudnetCustomer
}
