'use strict';
module.exports = function(sequelize, DataTypes) {
  var Serf = sequelize.define('Serf', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password_hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Serf.hasMany(models.Task);
        Serf.belongsToMany(models.User, {through: 'Tasks'});
      }
    }
  });
  return Serf;
};