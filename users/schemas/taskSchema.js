const { string } = require('joi');
const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
   TaskID:{
        type:Number,
        required:true
     },
     Date:{
      type:Date,
      required:true
     },
     TaskName:{
        type:String,
        required:true
     },
     LastDate:{
        type:Date,
        required:true
     },
     TaskPriority:{
        type:String,
        required:true
     }
     
})

module.exports = mongoose.model('Task',TaskSchema,'Tasks');