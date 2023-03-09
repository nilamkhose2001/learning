require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const User = require("./src/user/user.model");
const app = express();
const PORT = process.env.PORT;
const userRouter = require("./src/user/user.route");
const mediaRouter = require("./src/media/media.route");
const bodyParser = require("body-parser");
const path=require("path");
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/media", mediaRouter);
app.use("/public", express.static(path.join(__dirname, "public")));




app.listen(PORT, async () => {
  await connect();
  console.log(`listening on http://localhost:${PORT}`);
});
