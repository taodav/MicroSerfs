'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        })
        Task.belongsTo(models.Serf, {
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return Task;
};