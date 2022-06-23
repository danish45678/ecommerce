const mongoose = require('mongoose');
const express = require('express');
// const router = express.Router;
const categorySchema= new mongoose.Schema({
     catogoryid: {
        type: Number,
        required: true,
        unique:true
    },
   
    catogoryname :{
        type : String,
        required:true,
        unique:true
    }
    
});

module.exports = mongoose.model("Category", categorySchema);