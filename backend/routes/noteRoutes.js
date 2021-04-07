const express = require('express');
const router = express.Router();

const {getAllProducts,getProductsById,createNewUUID,checkValidUUID,generateValidUUID,deleteUrl,addNote,deleteNote} = require('../controller/notesController')

//@desc get all notes 
//@route /api/notes
router.get('/',getAllProducts)



router.get('/:id',getProductsById);
router.get('/validuuid/:id',checkValidUUID);
router.post('/generateuuid/:id',generateValidUUID);
router.post('/generateuuid',createNewUUID);
router.delete('/deleteurl/:url',deleteUrl);
router.patch('/addnote/:url',addNote);
router.patch('/deletenote/:url/:uuid', deleteNote);

module.exports = router;