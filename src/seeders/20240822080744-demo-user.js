'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'phuc1@gmail.com',
          password: '123',
          username: 'phuc1'
        },
        {
          email: 'phuc2@gmail.com',
          password: '123',
          username: 'phuc2'
        },
        {
          email: 'phuc3@gmail.com',
          password: '123',
          username: 'phuc3'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
