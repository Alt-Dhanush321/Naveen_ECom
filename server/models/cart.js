// models/Order.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./users");
const Product = require("./products");

const Order = sequelize.define("Order", {
  orderID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  userID: {
    type: DataTypes.INTEGER, // Change this to match the data type of the User model's primary key
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Pending",
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  shippingAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  billingAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  productID: {
    type: DataTypes.UUID, // Change this to match the data type of the Product model's primary key
    allowNull: false,
    references: {
      model: Product,
      key: "productId",
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
});

module.exports = Order;
