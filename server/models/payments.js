// models/Payment.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Payment = sequelize.define("Payment", {
  paymentID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  orderID: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Orders",
      key: "orderID",
    },
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transactionID: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Payment;
