const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect("mongodb://mongodb:27017/contact-manager-app");
    console.log("Database connected");
  } catch (err) {
    console.error("Error connecting to database:", err);
    process.exit(1);
  }
};

module.exports = connectDb;
