var express = require('express')
var mongoose = require('mongoose')
var product = require('./model/user')

// connect mongodb
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'connected to database')
})

var app = express()
app.use(express.json())

app.post('/users', (req, res) => {
    // capture data
    // save data
    product.create(req.body, (err, product) => {
        console.log(product)
        //  show data
        res.send(product)
    })
})

app.get('/users', (req, res) => {
    product.find({}, (err, product) => {
        console.log(product)
        res.json(product)
    })
})
// on GET request on '/users/:id' route, fetch a user
app.get('/users/:id', (req, res) => {
    // grab the id
    var id = req.params.id
    console.log(id)

    // product.find({_id:id},(err,product)=>{
    //     console.log(err,product)
    //     res.json(product)
    // })


    // product.findOne({_id:id},(err,product)=>{
    //     console.log(err,product)
    //     res.json(product)
    // })

    // use model.findById
    product.findById(id, (err, product) => {
        console.log(err, product)
        res.json(product)
    })
})

app.put('/users/:id', (req, res) => {
    // grab the id
    var id = req.params.id
    // product.update({},req.body,{new :true},(err,updateProduct)=>{
    //     console.log(err,updateProduct)
    //     res.json(updateProduct)
    // })


    // product.updateOne({_id:id},req.body,{new :true},(err,updateProduct)=>{
    //     console.log(err,updateProduct)
    //     res.json(updateProduct)
    // })
    
    product.findByIdAndUpdate(id,req.body,{new :true},(err,updateProduct)=>{
        console.log(err,updateProduct)
        res.json(updateProduct)
    })
})

app.delete('/users/:id',(req,res)=>{
    var id=req.params.id
    product.findByIdAndDelete(id,(err,deleteProduct)=>{
        console.log(err,deleteProduct)
        res.send(`${deleteProduct.id} is was deleted`)
    })
})

app.listen(4000, () => {
    console.log('server is listening on port 4k')
})