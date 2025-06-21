const express = require("express");
const cors=require('cors');
const authRouter=require('./routes/authRouter')
const connectDb = require("./config/db");
require("dotenv").config();
const app = express();

app.use(cors())
app.use(express.json())
//databse connection
connectDb()
//api
app.use('/api/v1/auth',authRouter)
app.listen(process.env.PORT, () => {
  console.log(`server is running on port no ${process.env.PORT}`);
});



