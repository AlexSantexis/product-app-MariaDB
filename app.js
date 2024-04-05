const express = require("express");
const app = express();
const port = 3000;
const dataSource = require("./connect").dataSource;
const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log("Server is up");
});
