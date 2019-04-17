'use strict';
module.exports = function(sequelize, DataTypes) {
  var Appointments = sequelize.define('Appointments', {
    userId: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Appointments;
};