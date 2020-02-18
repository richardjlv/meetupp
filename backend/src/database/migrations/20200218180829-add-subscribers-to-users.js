module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'subscribers', {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false,
      defaultValue: [],
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'subscribers');
  },
};
