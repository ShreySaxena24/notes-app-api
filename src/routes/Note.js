const express=require('express');
const router=express.Router();
const Note=require('./../models/note');

router.post("/list", async function(req, res){
    const notes = await Note.find({userId:req.body.userId});
    res.json(notes);
});    
router.post("/add", async function(req, res){
    
    await Note.deleteOne({id : req.body.id});
    var newNote= new Note(
        {
            id:req.body.id,
            userId:req.body.userId,
            title:req.body.title,
            content:req.body.content,
        }
    );
    await newNote.save();
    const response= {message: "New note created!"+ `id: ${req.body.id}`};
    res.json(response);
    // res.json(req.body);
});
router.post('/delete', async function(req,res){
    await Note.deleteOne({id:req.body.id});
    const response = {message:"Note Deleted"+`id : ${req.body.id}`};
    res.json(response);
});

module.exports = router;