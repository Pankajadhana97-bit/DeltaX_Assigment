const mongoose=require("mongoose");

const songSchema= new mongoose.Schema({
    name:{type:String,required:true},
    dateOfRelease:{type:String,required:true},
    cover:{type:String,required:true},
    artist:{type:mongoose.Schema.Types.ObjectId,ref:"Artist"},
    rating:{type:Number,default:1}
})


const Song=mongoose.model("Song",songSchema);

module.exports=Song