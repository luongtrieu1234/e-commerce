const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("Connect failed!");
    console.log("🚀🚀🚀🚀🚀: error", error);
  }
}

module.exports = { connect };
