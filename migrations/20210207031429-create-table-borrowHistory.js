'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BorrowHistories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      bookId:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Books',
          key: 'id'
        }
      },
      acountId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Accounts',
          key: 'id'
        }
      },
      getDate: Sequelize.DATE ,
      returnDate: Sequelize.DATE ,
      deadLine: Sequelize.DATE,
      price: Sequelize.FLOAT,
      status: Sequelize.STRING,
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
    await queryInterface.dropTable('BorrowHistories')
  }
}
