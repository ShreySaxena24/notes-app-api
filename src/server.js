const { response } = require('express');
const express= require('express');
const app=express();

const mongoose= require('mongoose');
const Note=require("./models/note");

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const mongodbPath="mongodb+srv://ShreySaxena:12345@cluster0.bxuqcfg.mongodb.net/notesdb";
mongoose.connect(mongodbPath).then(function()
{

    app.get("/", function(req, res){
        const response = {message:"API Works!"};
        res.json(response);
    });
    
    const noteRouter=require('./routes/Note');
    app.use('/notes', noteRouter);
});

const PORT =process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server Started at port:"+PORT);
});
