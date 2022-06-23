const express = require('express');
// const router = express.Router();
// const routers=require("express").Router();
const router = require('express').Router();
const Category = require('../models/Category');
const bycrpt = require('bcrypt');


//register api
router.post('/category', async (req,res) => {
    try{
    
        const newCategory ={
            categoryid : req.body.categoryid,
            categoryname : req.body.categoryname        }
            const category = await newCategory.save();
        res.status(200).json(category)

    } catch(err) {
        res.send(500).json(err);

    }
})

module.exports = router;