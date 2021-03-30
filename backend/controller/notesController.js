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
    createNewUUID
}