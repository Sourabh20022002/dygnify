const mongoose = require('mongoose');

const ProductSchemea = new mongoose.Schema({
   Business : String,
   Fname : String,
   Lname : String,
   Pno : String,
   Company : String,
   Age : String,
   Address: String,
   years: String
});

module.exports = mongoose.model("Loan", ProductSchemea);