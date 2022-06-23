const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
     productid: {
        type: number,
        required: true,
        unique:true
    },
   
    productname :{
        type : String,
        required:true,
        unique:true
    },
    
    productprice:{
        type:number,
        require:true
    },

    productmodel:{
        type:string,
        required:true
    },

    productdescription:{
        type:string 
    }


    ({ timestamps : true})
});

module.exports = mongooose.model("Product", productSchema);