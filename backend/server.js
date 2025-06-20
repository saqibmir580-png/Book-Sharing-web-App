const express = require("express");
const cors=require('cors');

const connectDb = require("./config/db");
require("dotenv").config();
const app = express();

app.use(cors())
app.use(express.json())
connectDb()

app.listen(process.env.PORT, () => {
  console.log(`server is running on port no ${process.env.PORT}`);
});



