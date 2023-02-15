var mongoose=require('mongoose')
var Schema=mongoose.Schema

var userSchema=new Schema({
    name:String,
    email:String,
    sports:[String]
})

var user=mongoose.model('user',userSchema)
module.exports=user