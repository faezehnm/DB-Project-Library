'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: Sequelize.STRING,
      page: Sequelize.INTEGER,
      price: Sequelize.FLOAT ,
      publisherId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Publishers',
          key: 'id'
        }
      },
      section: Sequelize.INTEGER,
      tiraj: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable('Books')
  }
}
