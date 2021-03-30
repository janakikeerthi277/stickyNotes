const express = require('express');
const router = express.Router();

const {getAllProducts,getProductsById,createNewUUID} = require('../controller/notesController')

//@desc get all notes 
//@route /api/notes
router.get('/',getAllProducts)



router.get('/:id',getProductsById);

router.post('/generateuuid',createNewUUID);


module.exports = router;