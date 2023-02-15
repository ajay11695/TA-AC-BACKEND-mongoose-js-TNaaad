var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var articleSchema=new Schema({
    title:String,
    description:String,
    tags:[String],
    likes:Number,
    auther:{type:Schema.Type.ObjectId},
    comments:String
},{timeStamps:true})

var article=mongoose.model('article',articleSchema)
module.exports=article