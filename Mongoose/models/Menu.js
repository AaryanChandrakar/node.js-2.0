const mongoose = require(`mongoose`);
const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    is_veg:{
         type: Boolean,
         required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    taste:{
        type: String,
        enum: [`Sweet`,`Spicy`,`Sour`],
        required: true,
    },
    is_drink:{
        type: Boolean,
        default: false,
    },
    ingredients:{
        type: [String],
        default:[],
    },
    num_salse:{
        type: Number,
        default: 0,
    }
});

//create menu model
const Menu = mongoose.model(`Menu`,menuItemSchema);
module.exports = Menu;