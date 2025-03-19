import { Router } from "express";
import {
  createSubscription,
  getUserSubscription,
} from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";
const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("get all subscription");
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send("get 1 subscription");
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send("update subscription");
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send("delete subscription");
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscription);
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send("cancel subscription");
});
subscriptionRouter.put("/upcoming-renewals", (req, res) => {
  res.send("get upcoming renewals");
});

export default subscriptionRouter;
