var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var articleShema=new Schema({
    title:String,
    description:String
})

var article=mongoose.module('Article',articleShema)
module.exports=article