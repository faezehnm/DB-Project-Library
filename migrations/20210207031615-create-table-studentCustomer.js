'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StudentCustomers', {
      accountId:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Accounts',
          key: 'id'
        }
      },
      studentNumber: Sequelize.STRING,
      university: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } 
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable('StudentCustomers')
  }
}
