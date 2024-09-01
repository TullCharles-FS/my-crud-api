const express = require("express");
const passport = require("password");
const passportService = require("../services/passport");

const requireLogin = passport.authenticate("local", {session: false});

const router = express.Router();
const auth_controller = require("../controllers/auth_controller");

router.post("/", auth_controller.signup);
router.post("/signin", requireLogin, auth_controller.signin);

module.exports = router;
