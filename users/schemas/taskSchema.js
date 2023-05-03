const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
   TaskID:{
        type:Number,
        required:true
     },
     Date:{
      type:Date(),
      required:true
     },
     TaskName:{
        type:String,
        required:true
     },
     LastDate:{
        type:Date(),
        required:true
     },
     TaskPriority:{
        type:Date(),
        required:true
     }
     
})

module.exports = mongoose.model('Admin',AdminSchema,'Admins');