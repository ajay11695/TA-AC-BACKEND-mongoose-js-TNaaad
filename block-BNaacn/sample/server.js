// require
var express=require('express')
var mongoose=require('mongoose')

// mongoose to connected to database
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/sample',(err)=>{
  console.log(err?err:'connected to database')
})

var app=express()

// routes
app.get('/',(req,res)=>{
    res.send('welcome')
})

app.listen(4000,()=>{
    console.log('sderver is listening on port 4k')
})