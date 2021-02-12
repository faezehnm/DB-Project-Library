'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      stock: Sequelize.FLOAT,
      fname: Sequelize.STRING,
      lname: Sequelize.STRING,
      type: Sequelize.STRING,
      nationalId: Sequelize.STRING,
      phone: Sequelize.STRING,
      address: Sequelize.TEXT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable('Accounts')
  }
}
