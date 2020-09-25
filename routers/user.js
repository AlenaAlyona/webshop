const { Router } = require("express");
const User = require("../models").user;
const Order = require("../models").order;
const router = new Router();
// const bcrypt = require("bcrypt");

router.get("/:userId/orders", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: { model: Order },
    });
    if (user) {
      res.send(user.orders);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName, address } = req.body;
    if (!email || !password || !fullName || !address) {
      res
        .status(400)
        .send("Must provide an email address, password, full name and address");
    } else {
      // const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        email,
        password,
        fullName,
        address,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
