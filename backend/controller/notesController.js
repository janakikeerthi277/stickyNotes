const Note = require('../models/Notes');
const { v4: uuidv4 } = require('uuid');


const getAllProducts = async(req,res) =>{
    try{
        console.log("test");
        const notes = await Note.find({});
        res.json(notes);

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"})
    }
}


const checkValidUUID = async(req,res) =>{
    try{
        console.log("check Valid UUID");
        const uuid = req.params.id;
        const notes = await Note.find({uuid});
        console.log(notes);
        if(notes)
            res.json(false);
        else
            res.json(true);
        

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"})
    }
}


const getProductsById = async(req,res) =>{
    try{
        const note = await Note.findById(req.params.id);
        // res.header("Access-Control-Allow-Origin", "*");

        res.json(note);

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"})
    }
}


const generateValidUUID = async(req,res) =>{
    try{
       const url = req.params.id;
       const notes = new Note({url});
       notes.save();

       res.json(notes);

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"UUID is not generated"})
    }
}



const createNewUUID = async(req,res) =>{
    try{
        const uuid = uuidv4();
        res.json(uuid);

    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"UUID is not generated"})
    }
}


module.exports ={
    getAllProducts,
    getProductsById,
    createNewUUID,
    checkValidUUID,
    generateValidUUID
}