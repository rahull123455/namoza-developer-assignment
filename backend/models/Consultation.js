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

    email:{
        type:String,
        trim:true
    },

    age:{
        type:String
    },

    gender:{
        type:String
    },

    department:{
        type:String
    },

    doctor:{
        type:String
    },

    location:{
        type:String
    },

    date:{
        type:String
    },

    time:{
        type:String
    },

    insurance:{
        type:String
    },

    symptoms:{
        type:String
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Consultation", consultationSchema);