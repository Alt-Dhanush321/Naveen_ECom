// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordersController");

// Create a new order
router.post("/", orderController.createOrder);

// Get all orders
router.get("/", orderController.getAllOrders);

// Get an order by ID
router.get("/:id", orderController.getOrderById);

// Update an order by ID
router.put("/:id", orderController.updateOrderById);

// Delete an order by ID
router.delete("/:id", orderController.deleteOrderById);

module.exports = router;
