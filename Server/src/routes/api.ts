import express,{Request,Response} from 'express'
import {generateUUID} from '../generateUUID'
import {Notes} from '../models/stickyNotes'

const router = express.Router();

router.post('/create',async(req:Request,res:Response) => {
    let uuid:string;
    do
    {
        uuid = generateUUID();
    }while(false);
  //create an entry in the database with the uuid
    const notesGenerate = Notes.build({uuid});
    console.log(notesGenerate);
    await notesGenerate.save();
    return res.status(201).send(notesGenerate);
    
});



router.post('/uuid', (req,res)=>{
    return res.end('to do post')
})

export {router}
