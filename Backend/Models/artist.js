const mongoose=require("mongoose");


const artistSchema= new mongoose.Schema({
    name:{type:String,required:true},
    dob:{type:String,required:true},
    bio:{type:String,required:true},
    song:[{type:String}]
})



module.exports = mongoose.model("Artist",artistSchema); 