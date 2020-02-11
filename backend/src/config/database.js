module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'metupp',
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
