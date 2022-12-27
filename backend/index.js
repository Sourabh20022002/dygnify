const express = require('express');
const cors = require('cors');
require('./db/config')
const product = require('./db/Personal')
const business = require('./db/Business')
const loan = require('./db/Loan')
const app = express();



app.use(express.json())
app.use(cors());
app.use(express.text())

app.post('/add', async (req, res) =>{
    let Product = new product(req.body);
    let result = await Product.save();
    res.send(result)
})

app.post('/business', async (req, res) =>{
    let Product = new business(req.body);
    let result = await Product.save();
    res.send(result)
})

app.post('/loan', async (req, res) =>{
    let Product = new loan(req.body);
    let result = await Product.save();
    res.send(result)
})

app.post('/produuct', async (req, res) => {
    let products = await product.find();
    if(products.length > 0) {
         res.send(products)
    }else{
         res.send({products: "No User found"})
    }
})

app.listen(5000, () => {
    console.log('listening on port')
});