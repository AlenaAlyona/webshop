const { Router } = require("express");
const Order = require("../models").order;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    if (!userId || !productId) {
      res.status(400).send("Must provide user id");
    } else {
      const newOrder = await Order.create({
        userId,
        productId,
      });
      res.json(newOrder);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
