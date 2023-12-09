// models/Product.js

const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Product = sequelize.define("Product", {
  productId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.UUID, // Assuming category IDs are UUIDs
    allowNull: false,
    references: {
      model: "Categories", // Adjust the model name if needed
      key: "categoryId",
    },
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  costPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stockQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
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
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  discountPercentage: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
  images: {
    type: DataTypes.JSON, // Assuming storing URLs as an array of strings
    allowNull: true,
  },
  reviewsRatings: {
    type: DataTypes.JSON, // Assuming storing reviews and ratings as an array of objects
    allowNull: true,
  },
});

module.exports = Product;
