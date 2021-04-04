const express = require('express');
const router = express.Router();

const {getAllProducts,getProductsById,createNewUUID,addNote,deleteNote,findUrl,getNote, createUrl} = require('../controller/notesController')

//@desc get all notes 
//@route /api/notes
router.get('/',getAllProducts)

router.get('/findurl/:url',findUrl);


router.post('/createurl/:url',createUrl);

router.get('/:id',getProductsById);

router.post('/generateuuid',createNewUUID);
// router.get('/getnote/:url/:uuid',getNote);
router.patch('/addnote/:url',addNote);

router.patch('/deletenote/:url/:uuid', deleteNote);

module.exports = router;
