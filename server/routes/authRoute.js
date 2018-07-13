const express = require("express");
const router = express.Router();

const {
  createUser,
  getUser,
  verifyUser,
  confirmToken,
  resendToken

  // deleteUser,

  // logout
} = require(`${__dirname}/../controllers/authController`);

router.get("/user", getUser);
router.post("/register", createUser);
router.post("/login", verifyUser);
router.post("/confirmation", confirmToken);
router.post("/resend", resendToken);

// //ends session
// router.get("/logout", logout);
// //deletes user, and any relatives, from database
// router.delete("/delete_account", verifyUser, deleteUser);

module.exports = router;
