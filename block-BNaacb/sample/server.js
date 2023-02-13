var express =require('express')
var mongoose=require('mongoose')
var logger=require('morgan')

// connect to database
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost/sample',(err)=>{
    console.log(err?err:'connected to database')
})

// instactiate app
var app=express()

// middleware
app.use(logger('dev'))

// route
app.get('/',(req,res)=>{
    res.send('welcome')
})

app.listen(4000,()=>{
    console.log('server is listening on port 4k')
})