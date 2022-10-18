const express=require("express");
const Artist = require("../Models/artist");


const router= express.Router();


router.post("/artist",async(req,res) =>{
    
    const data = new Artist({
        name:req.body.name,
        dob:req.body.dob,
        bio:req.body.bio,
        song:req.body.song
    });
try{ 

    const Artist =await data.save();
    res.status(201).json({
    status:"success",
    Artist
})
}
catch(err){
    res.status(501).json(err);
}
   
})

router.get("/artists" , async(req,res) =>{
    try{
        const authors=await Artist.find().populate("song");
        res.status(200).json(authors);
    }
    catch(err){
        res.status(403).json(err);
    }
    
    
})

module.exports=router;