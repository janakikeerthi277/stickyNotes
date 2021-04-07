const express = require('express');
const router = express.Router();

const {getAllProducts,getProductsById,createNewUUID,checkValidUUID,generateValidUUID} = require('../controller/notesController')

//@desc get all notes 
//@route /api/notes
router.get('/',getAllProducts)



router.get('/:id',getProductsById);
router.get('/validuuid/:id',checkValidUUID);
router.post('/generateuuid/:id',generateValidUUID);
router.post('/generateuuid',createNewUUID);


module.exports = router;