var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var commentSchema=new Schema({
    content:String,
    auther:{type:Schema.Type.ObjectId},
    article:String
},{timeStamps:true})

var comment=mongoose.model('article',commentSchema)
module.exports=comment