const mongoose=require("mongoose");

const menSchema=mongoose.Schema({
    image:String,
    title:String,
    category:String,
    price:Number,
    rating:Number,
    adminID:String
})

const Menmodel=mongoose.model("men",menSchema);

module.exports={
    Menmodel
}