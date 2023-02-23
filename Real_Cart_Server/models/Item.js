const mongoose = require('mongoose');
const {Schema} = mongoose;

const ItemSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    price:{
        type: Number,
        required: true 
    },
    company:{
        type: String
    },
    desc:{
        type: String
    },
    minStock:{
        type: Number
    },
    stock:{
        type: Number
    },
    id:{
        type:String
    }
})

module.exports = mongoose.model("Items", ItemSchema);