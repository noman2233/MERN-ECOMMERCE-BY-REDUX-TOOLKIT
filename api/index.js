const express = require("express");
const app = express();
const main = require("./db");
const userRouter = require("./routes/users");
const usersAuth = require("./routes/auth");
const productsRoutes = require("./routes/product");
const orderRoute = require("./routes/order")
const cartRoutes = require("./routes/cart")
const stripeRoute = require("./routes/stripe");
const cookieParser=require("cookie-parser")
const cors=require("cors")
main();
const hostname = "localhost";
const port = 80;

app.use(cookieParser(""))
app.use(cors({ origin : '*'}))
// app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", usersAuth);
app.use("/api/products", productsRoutes);
app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", stripeRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, hostname, () => {
  console.log(`App is running at port http://${hostname}:${port} `);
});
