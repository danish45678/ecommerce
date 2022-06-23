const express = require('express');
// const router = express.Router();
const routers=require("express").Router();
const router = express.Router();
const Customer = require('../models/Customer');
const bycrpt = require('bcrypt');
const { Router } = require('express');


//register api
Router.post('/register', async (req,res) => {
    try{
        const salt= await bycrpt.genSalt(10);
        const hashPass= await bycrpt.hashPass(req.body.password,salt)
        const newCustomer ={
           email : req.body.email,
           phone: req.body.phone,
           address: req.body.address,
           username : req.body.username,
            F_name: req.body.F_name,
            L_name: req.body.L_name,
            dob: req.body,dob,
            gender: req.body.gender
        }
        const customer = await newCustomer.save();
        res.status(200).json(customer)

    } catch(err) {
        res.send(500).json(err);

    }
})

module.exports = router;