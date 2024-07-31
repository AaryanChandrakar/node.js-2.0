const { uniq } = require("lodash");
const mongoose = require(`mongoose`);

// define the persone schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:[`Chef`,`Waiter`,`Manager`],
        required:true
    },
    mobile:{
        type:String,
        required:true,
        uniqe:true
    },
    email:{
        type:String,
        required:true,
        uniq:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        require:true
    }
});

//create person model
const Person = mongoose.model(`Person`, personSchema);
module.exports = Person;
