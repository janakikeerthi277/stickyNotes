const express = require('express');
const router = express.Router();

const {getAllProducts,getProductsById,createNewUUID,addNote,deleteNote,findUrl} = require('../controller/notesController')

//@desc get all notes 
//@route /api/notes
router.get('/',getAllProducts)

router.get('/findurl/:url',findUrl);

//the below post request can be used to add data
//router.post('/addnotesparent',addNotesParent);

router.get('/:id',getProductsById);

router.post('/generateuuid',createNewUUID);

router.patch('/addnote/:id',addNote);

router.patch('/deletenote/:id1/:id2', deleteNote);

module.exports = router;
