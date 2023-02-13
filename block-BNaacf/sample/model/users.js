var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:String,
    age:{type:String,default:0},
    sports:[String],
    marks:[Number]
})
