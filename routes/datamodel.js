// Default (GPT-3.5)

// User
// const express = require("express");
// const router = express.Router();
// const DataModel = require("../models/userdata");
// router.use(express.json());
// router.post("/insertData", async (req, res) => {
//   const { product_id, imgSrc, productName } = req.body;
//   const username = req.user.username;
//   const newData = new DataModel({
//     username: username, // Set the username as needed
//     product_id,
//     imgSrc,
//     productName,
//     item_type: "wishlistitems",
//   });

//   try {
//     const savedData = await newData.save();
//     res.json({ success: true, data: savedData });
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).json({ success: false, message: "Error inserting data" });
//   }
// });
// module.exports = router;
const express = require("express");
const router = express.Router();
const DataModel = require("../models/userdata");
router.use(express.json());
router.post("/insertData", async (req, res) => {
  const { product_id, imgSrc, productName } = req.body;
  const username = req.user.username;
  const newData = new DataModel({
    username: username, // Set the username as needed
    product_id,
    imgSrc,
    productName,
    item_type: "wishlistitems",
  });

  try {
    const savedData = await newData.save();
    res.json({ success: true, data: savedData });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ success: false, message: "Error inserting data" });
  }
});
module.exports = router;
