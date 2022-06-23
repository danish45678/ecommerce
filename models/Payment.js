const mongoose = require('mongoose');

const paymentSchema= new mongoose.Schema({
      paymentid: {
        type: number,
        required: true,
        unique : true
    },
   
    ammount :{
        type : number,
        required : true

    },
    paymentmethod :{
        type:string,
        required:true
    }

    ({ timestamps : true})
});

module.exports = mongooose.model("Payment", paymentSchema);