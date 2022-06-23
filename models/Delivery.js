const mongoose = require('mongoose');

const deiverySchema= new mongoose.Schema({
      delcustomer: {
        type: string,
        required: true
    },
   
     delid:{
        type : number,
        required: true,
        uniquie:true
    },
     del_date :{
        $gte: today.toDate(),
        $lte: moment(today).endOf('day').toDate()
    }

    ({ timestamps : true})
});

module.exports = mongooose.model("Delivery", deliverySchema);