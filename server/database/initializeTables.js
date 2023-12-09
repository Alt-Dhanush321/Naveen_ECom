const sequelize = require("./db");
const Category = require("../models/category");
const Product = require("../models/products");
const User = require("../models/users");
const Cart = require("../models/cart");
const Order = require("../models/order");
const Payments = require("../models/payments");

const initializeTables = async () => {
  try {
    // Synchronize Category model first
    await Category.sync();
    console.log("Category table synchronized");

    // Synchronize Product model after Category
    await Product.sync();
    console.log("Product table synchronized");

    await User.sync();
    console.log("user table synchronized");

    await Cart.sync();
    console.log("Cart table synchronized");

    await Order.sync();
    console.log("orders table synchronized");

    await Payments.sync();
    console.log("payments table synchronized");
  } catch (error) {
    console.error("Error synchronizing tables:", error);
  }
};

module.exports = initializeTables;
