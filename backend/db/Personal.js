const mongoose = require('mongoose');

const ProductSchemea = new mongoose.Schema({
   Email : String,
   Fname : String,
   Lname : String,
   Pno : String,
   Company : String,
   Age : String,
   Address: String
});

module.exports = mongoose.model("personal", ProductSchemea);