import express from "express";
const router = express.Router();
import { isAuthenticated } from "../middlewares/auth.js";
import { buySubscription } from "../controllers/paymentController.js";

//Buy Subscription
router.route("/subscribe").get(isAuthenticated,buySubscription)

export default router;
