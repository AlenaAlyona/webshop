const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const jsonParser = express.json();

app.use(jsonParser);

const userRouter = require("./routers/user");
const orderRouter = require("./routers/order");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category");

app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);
// app.use("/images", imageRouter);
// app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
