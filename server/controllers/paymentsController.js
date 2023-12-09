// controllers/paymentController.js

const Order = require("../models/order");
const Payment = require("../models/payments");

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const { orderID, amount, paymentMethod, transactionID } = req.body;

    // Check if the order exists
    const order = await Order.findByPk(orderID);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    const payment = await Payment.create({
      orderID,
      amount,
      paymentMethod,
      transactionID,
    });

    return res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    return res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get payment by ID
const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    return res.status(200).json(payment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update payment by ID
const updatePaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { transactionID } = req.body;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    await payment.update({ transactionID });

    return res.status(200).json(payment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete payment by ID
const deletePaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    await payment.destroy();

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
};
