const express=require("express");
const Song = require("../Models/songs");

const router= express.Router();


router.post("/songs",async(req,res) =>{
    console.log(req.body)
    
    const data = new Song({
        name:req.body.name,
        dateOfRelease:req.body.dateOfRelease,
        cover:req.body.cover,
        artist:req.body.artist,
        rating:req.body.rating
    });
try{ 

    const song =await data.save();
    res.status(200).json({  
    status:"success",
    song
})
}
catch(err){
    res.status(501).json(err);
}
   
})

router.get("/songs" , async(req,res) =>{
    try{
        const songs=await Song.find().populate("artist")
        res.status(200).json(songs)
    }
    catch(err){
        res.status(404).json(err);
    }
    
})

router.put("/:id" , async (req,res) =>{
    const id =req.params.id;
    try{
       const song = await Song.findByIdAndUpdate({_id:id},{$set:{rating:req.body.rating}})
        res.status(201).json("success")
    }
    catch(err){
        res.status(404).json(err);
    }
    
})

module.exports=router;