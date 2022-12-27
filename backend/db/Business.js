const mongoose = require('mongoose');

const ProductSchemea = new mongoose.Schema({
   Business : String,
   Gst : String,
   Fname : String,
   Lname : String,
   Pno : String,
   Company : String,
   Age : String,
   Address: String
});

module.exports = mongoose.model("business", ProductSchemea);