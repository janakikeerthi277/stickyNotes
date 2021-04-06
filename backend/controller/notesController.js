const Note = require('../models/Notes');
const { v4: uuidv4 } = require('uuid');
const { Mongoose } = require('mongoose');
const Notes = require('../models/Notes');


const getAllProducts = async (req, res) => {
    try {
        console.log("test");
        const notes = await Note.find({});
        res.json(notes);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" })
    }
}


const getProductsById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        // res.header("Access-Control-Allow-Origin", "*");
        res.json(note);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" })
    }
}



const createNewUUID = async (req, res) => {
    try {
        const uuid = uuidv4();
        res.json(uuid);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "UUID is not generated" })
    }
}

const isExists = async (req, res) => {
    const url = await Notes.findOne({ url: req.params.id });
    res.send(url);
}

const addUrl = async (req,res) => {
    const notes = new Notes({'url' : req.params.id});
    await notes.save().
    then( () =>{
        res.status(201).json({message : 'Url created successfully'});
    }).
    catch(err =>{
        console.log(err);
        res.status(500).json({message : 'Error while creating Url'});
    })
}

const addNote = async (req, res) => {
    await Notes.findOneAndUpdate(
        { url: req.params.id },
        { $push: { notes: req.body.notes } },
        {
            new: true,
        }
    ).then(() => {
        res.status(201).json({ message: "note created successfully" })
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "Error in note creation" })
    })
}

const deleteNote = async (req, res) => {
    await Notes.findOneAndUpdate(
        { url: req.params.id1 },
        { $pull: { notes: { uuid: req.params.id2 } } }
    ).then(() => {
        res.status(200).json({ message: "Deleted note successfully" })
    }).catch((err) => {
        res.status(500).json({ message: "Error while deleting note " })
    })
}

module.exports = {
    getAllProducts,
    getProductsById,
    createNewUUID,
    isExists,
    addNote,
    deleteNote,
    addUrl
}