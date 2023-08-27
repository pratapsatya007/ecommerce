const mongoose = require("mongoose");
const user = require("./user");

const dataSchema = new mongoose.Schema({
  username: String,
  imgSrc: String,
  productName: String,
  product_id: { type: String, unique: true },
  item_type: String,
});

// Remove the unique index
dataSchema.index({ username: 1 }, { unique: false });

const cartModel = mongoose.model("cart", dataSchema);

module.exports = cartModel;
