"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.category);
      product.belongsToMany(models.order, {
        through: "productOrders",
        foreignKey: "productId",
      });
    }
  }
  product.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      description: { type: DataTypes.STRING, allowNull: false, unique: false },
      price: { type: DataTypes.INTEGER, allowNull: false, unique: false },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
