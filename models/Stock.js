const mongoose = require('mongoose');

const stockSchema= new mongoose.Schema({
     stockid: {
        type: number,
        required: true,
        unique:true
    },
   
    stockname :{
        type : String,
        required:true,  
    },
    stocktype:{
        type:tring,
        required:true
    },
    stockdescription:{
        type:string
    }


    ({ timestamps : true})
});

module.exports = mongooose.model("Stock", stockSchema);