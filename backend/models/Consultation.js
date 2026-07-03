const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
{
    fullName:{
        type:String,
        required:true,
        trim:true
    },

    phone:{
        type:String,
        required:true,
        trim:true
    },

    clinic:{
        type:String,
        default:"General"
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Consultation", consultationSchema);