// models/Order.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Product = require("./products"); // Import the Product model
const User = require("./users"); // Import the User model

const Order = sequelize.define("Order", {
  orderID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  userID: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User, // Reference the User model
      key: "userID",
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
  // Include product details in the Order model
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  // Associate the Order model with the Product model
  productID: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Product, // Reference the Product model
      key: "productId",
    },
  },
});

module.exports = Order;
