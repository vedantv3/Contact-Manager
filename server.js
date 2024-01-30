// Assuming this is your server.js or main entry point
const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/connect");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

connectDb(); // Connect to MongoDB

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
