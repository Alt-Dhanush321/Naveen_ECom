// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentsController");

// Create a new payment
router.post("/", paymentController.createPayment);

// Get all payments
router.get("/", paymentController.getAllPayments);

// Get a payment by ID
router.get("/:id", paymentController.getPaymentById);

// Update a payment by ID
router.put("/:id", paymentController.updatePaymentById);

// Delete a payment by ID
router.delete("/:id", paymentController.deletePaymentById);

module.exports = router;
