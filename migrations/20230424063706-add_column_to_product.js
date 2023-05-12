'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // return Promise.all([
    //   queryInterface.addColumn(
    //     'Product', // table name
    //     'prod_image', // new field name
    //     {
    //       type: Sequelize.STRING,
    //       allowNull: true,
    //     },
    //   ),
    // await queryInterface.addColumn('Product', 'prod_image', {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    //   defaultValue: ''
    // // });


    return Promise.all([
      queryInterface.addColumn(
        'Products', // table name
        'prod_image', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('Products', 'prod_image'),
    ]);
    // await queryInterface.removeColumn('Product', 'prod_image');
  }
};
