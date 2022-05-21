const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    plan:{
        type:String,
        required:true,
    },
    start:{
        type:Date,
        required:true,
    },
    renue:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('Post', postSchema);