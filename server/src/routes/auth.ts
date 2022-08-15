import express from "express";
import {
  login,
  forgotPassword,
  register,
  resetPassword,
} from "../controller/auth.controller";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword:token").put(resetPassword);


module.exports = router;
