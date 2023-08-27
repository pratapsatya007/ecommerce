// routes/userData.js
const express = require("express");
const router = express.Router();
const DataModel = require("../models/userdata");

router.get("/getData/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const data = await DataModel.find({
      username: username,
      item_type: "wishlistitems",
    });
    res.json({ success: true, data });
  } catch (err) {
    console.error("Error retrieving data:", err);
    res.status(500).json({ success: false, message: "Error retrieving data" });
  }
});

module.exports = router;
