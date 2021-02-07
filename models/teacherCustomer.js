'use strict'

module.exports = (sequelize, DataTypes) => {
  const TeacherCustomer = sequelize.define('TeacherCustomer', {
    accountId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    university: DataTypes.STRING
  })

    TeacherCustomer.associate = models => {
        TeacherCustomer.belongsTo(models.Account)
        models.Account.hasMany(TeacherCustomer)  
    }
  return TeacherCustomer
}
