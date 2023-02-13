// require
var express=require('express')
var mongoose=require('mongoose')

// connect it to local mongodb server instance
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/sample',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    console.log(err ? err:'connected to database')
})

// instantiate the app
var app=express()

app.get('/',(req,res)=>{
    res.send('welcome')
})

app.listen(4000,()=>{
    console.log('server is listening to port 4k')
})