const mongoose = require('mongoose');

const shippingaddressSchema= new mongoose.Schema({
      shippingid: {
        type: number,
        required: true,
        unique: true
    },
   
    Referencenumber :{
        type : number
    },
    customerid :{
        type:number,
        required:true
    }

    ({ timestamps : true})
});

module.exports = mongooose.model("ShippingAddress", shippingaddressSchema);