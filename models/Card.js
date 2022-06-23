const mongoose = require('mongoose');

const cardSchema= new mongoose.Schema({
      quantity: {
        type: number,
        required: true
    },
   
    totalcoast :{
        type : number
    },
    cardid :{
        type:number,
        required:true
    }

    ({ timestamps : true})
});

module.exports = mongooose.model("Card", cardSchema);