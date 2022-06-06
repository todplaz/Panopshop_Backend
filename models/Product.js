const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
  {
  title: {type:String, required:true, unique:true},
  color: {type:Array},
  image: {type:String, required:true},
  price: {type:Number, required:true},
  size: {type:Array},
  inStock: { type: Boolean, default: true}
  },{ timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);