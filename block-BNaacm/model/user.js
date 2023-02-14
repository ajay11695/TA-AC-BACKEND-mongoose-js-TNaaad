var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var userShema=new Schema({
    name:String,
    marks:[Number],
    subject:[String],
    age:{type:Number}
})

module.exports=mongoose.module('user',userShema)