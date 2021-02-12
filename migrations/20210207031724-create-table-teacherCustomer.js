'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TeacherCustomers', {
      accountId:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Accounts',
          key: 'id'
        },
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      teacherId: Sequelize.INTEGER,
      university: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable('TeacherCustomers')
  }
}
