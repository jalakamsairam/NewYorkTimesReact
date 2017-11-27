const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedarticles = new Schema ({
    headline:{type:String, required:true, unique:true},
    url:{type:String,required:true},
    date:{type:Date, required:true},
    createdAt:{type:Date,default:Date.now()}
});

const Saved = mongoose.model("Saved",savedarticles);

module.exports = Saved;