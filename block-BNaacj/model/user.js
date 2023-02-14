var mongoose=require('mongoose')
var Schema=mongoose.Schema

var userSchema=new Schema({
    name:{type:String},
    age:{type:Number,maxlength:30},
    mark:[Number],
    password:{type:String,minlength:5,maxlength:15},
    createdAt:{type:Date,default:new Date()}
},{})