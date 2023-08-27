const express = require("express");
const router = express.Router();
const DataModel = require("../models/userdata"); // Import your DataModel
const passport = require("passport");

// ...

// Remove data based on product_id

router.delete("/deleteData/:product_id", async (req, res) => {
  const product_idToDelete = req.params.product_id; // Get the product_id from the URL parameter

  try {
    await DataModel.deleteOne({ product_id: product_idToDelete }); // Delete data associated with the specified product_id
    res.json({ success: true, message: "Data deleted successfully" });
  } catch (err) {
    console.error("Error deleting data:", err);
    res.status(500).json({ success: false, message: "Error deleting data" });
  }
});

module.exports = router;
