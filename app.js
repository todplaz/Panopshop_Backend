const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(express.json());
app.use(morgan('tiny'));
require('dotenv/config');
const api = process.env.API_URL;
const cors = require('cors');
app.use(cors());
app.options('*', cors());

//ROUTES
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

app.use(`${api}/users`, userRoute);
app.use(`${api}/auth`, authRoute);
app.use(`${api}/products`, productRoute);
app.use(`${api}/carts`, cartRoute);
app.use(`${api}/orders`, orderRoute);

app.listen(process.env.PORT || 4000, () => {
  console.log(api);
});
