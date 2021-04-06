const express = require('express');
const router = express.Router();

const { getAllProducts, getProductsById, createNewUUID, isExists, addNote, deleteNote, addUrl } = require('../controller/notesController')

//@desc get all notes 
//@route /api/notes
router.get('/', getAllProducts)



router.get('/:id', getProductsById);

router.post('/generateuuid', createNewUUID);

router.get('/checkUUID/:id', isExists);

router.get('/readNote/:id', isExists);

router.patch('/addNote/:id', addNote);

router.delete('/deleteNote/:id1/:id2', deleteNote);

router.post('/createUrl/:id', addUrl);


module.exports = router;