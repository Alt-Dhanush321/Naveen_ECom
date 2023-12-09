// controllers/cartController.js

const Cart = require("../models/cart");
const User = require("../models/users");
const Product = require("../models/products");

// Create a new cart item
const createCartItem = async (req, res) => {
  try {
    const { userID, productID, quantity } = req.body;

    // Check if the user and product exist
    const user = await User.findByPk(userID);
    const product = await Product.findByPk(productID);

    if (!user || !product) {
      return res.status(404).json({ error: "User or product not found" });
    }

    const cartItem = await Cart.create({
      userID,
      productID,
      quantity,
    });

    return res.status(201).json(cartItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all cart items
const getAllCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll();
    return res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get cart item by ID
const getCartItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    return res.status(200).json(cartItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update cart item by ID
const updateCartItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const cartItem = await Cart.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    await cartItem.update({ quantity });

    return res.status(200).json(cartItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete cart item by ID
const deleteCartItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await Cart.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    await cartItem.destroy();

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCartItem,
  getAllCartItems,
  getCartItemById,
  updateCartItemById,
  deleteCartItemById,
};
