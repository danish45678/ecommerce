const express = require('express');
const mongoose = require('mongoose');
const dotenv= require('dotenv');
const authRoute=require('./routes/auth.js')
const cateroute =require('./routes/category');
const { application } = require('express');

dotenv.config();
const app= express();

const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://localhost:27017/E-Commerce", {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  }) .then( () => { console.log("successful DB Create")})
  .catch((err) => {
        console.log(err);
    })

// all api is here
// app.use("/register/auth", authRoute)
// app.use("routes/category", cateroute)


 app.listen(PORT, () => {
     console.log("server running on 5000 port ${port}");
 })