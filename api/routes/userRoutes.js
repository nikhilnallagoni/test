const express = require("express");
const {
  registerUser,
  loginUser,
  getProfileDetails,
  profileDetails,
} = require("../controllers/userController");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfileDetails);
// router.put("/profile", profileDetails);
module.exports = router;
