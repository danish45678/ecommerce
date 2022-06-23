
const mongoose = require('mongoose');
const express = require('express');

const customerSchema= new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
   
    username :{
        type : String,
        required:true,
        unique:true
    },

    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAddress.address",
        required: true
      },

    F_Name:{
        type:String,
        required:true
    },
    L_Name:{
        type:String,
        required:true
    },

    dateOfBirth: {
        type: Date,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
      },
    
    isAdmin:{
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model("Customer",customerSchema);
