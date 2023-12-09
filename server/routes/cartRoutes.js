// routes/cartItemRoutes.js
const express = require("express");
const router = express.Router();
const cartItemController = require("../controllers/cartController");

// Create a new cart item
router.post("/", cartItemController.createCartItem);

// Get all cart items
router.get("/", cartItemController.getAllCartItems);

// Get a cart item by ID
router.get("/:id", cartItemController.getCartItemById);

// Update a cart item by ID
router.put("/:id", cartItemController.updateCartItemById);

// Delete a cart item by ID
router.delete("/:id", cartItemController.deleteCartItemById);

module.exports = router;
