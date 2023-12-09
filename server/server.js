// index.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./database/db");
const initializeTables = require("./database/initializeTables");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRouts");
const usersRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRouts = require("./routes/orderRouts");
const paymentsRouts = require("./routes/paymentsRouts");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sync models with the database
(async () => {
  await initializeTables();
  // Start your application logic here
})();

// Welcome message for the root route
app.get("/", (req, res) => {
  res.send("Welcome to the server-side of the E-commerce API");
});

// Use productRoutes
app.use("/products", productRoutes);
app.use("/category", categoryRoutes);
app.use("/users", usersRoutes);
app.use("/cart", cartRoutes);
app.use("/payments", paymentsRouts);
app.use("/orders", orderRouts);

app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
