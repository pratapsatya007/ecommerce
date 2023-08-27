const express = require("express");
const router = express.Router();
const passport = require("passport");

// Route to retrieve the authenticated username
router.get("/getUsername", passport.authenticate("local"), (req, res) => {
  const authenticatedUsername = req.user.username;
  // Assuming you store the username in the req.user object
  localStorage.setItem("user", authenticatedUsername);
  if (authenticatedUsername) {
    res.json({ success: true, username: authenticatedUsername });
  } else {
    res.status(404).json({ success: false, message: "Username not found" });
  }
});

module.exports = router;
