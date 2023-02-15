var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var commentSchema=new Schema({
    name:{type:String,require:true},
    email:{type:String,match:/@/},
    age:{type:Number,maxlength:35}
},{timeStamps:true})

var comment=mongoose.model('article',commentSchema)
module.exports=comment