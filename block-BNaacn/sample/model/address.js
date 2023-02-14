var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var addressSchema=new Schema({
   village:String,
   city: {types:String,required:true},
   state:{types:String,required:true},
   pin:Number,
   user:Schema.Types.ObjectId
},{timestamps:true})

let address=mongoose.model("address",addressSchema)
module.exports=address