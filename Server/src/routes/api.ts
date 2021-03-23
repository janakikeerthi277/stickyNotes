import express,{Request,Response} from 'express'
import {generateUUID} from '../generateUUID'
import Notes from '../models/stickyNotes'


// const router = express.Router();

// GET : return all entries

export let allNotes  = (req:Request,res:Response)=>{
  
  let notes = Notes.find((err:any,notes:any)=>{
    if(err){
      res.send("Error!")
    }
    else{
      res.send(notes);
    }
  })
}


export let oneNote  = (req:Request,res:Response)=>{
  let notes = Notes.findById(req.params.id,(err:any,notes:any)=>{
    if(err){
      res.send("Error!")
    }
    else{
      res.send(notes);
    }
  })
}


export let deleteNotes  = (req:Request,res:Response)=>{
  console.log(req.params.id);
  //let {uuid} = req.body;
  let options; // it is just a dummy document
  let note = Notes.deleteOne({_id: req.params.id},options,(err:any)=>{
      if(err){
        res.send(err);
      }
      else{
        res.send("Successfully delete book");
      }
  });

}


export let updateNotes  = (req:Request,res:Response)=>{
  console.log(req.body);
  let note = Notes.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err:any,note:any) =>{
      if(err){
        res.send(err);
      }
      else{
        res.send("Succesfully updated note!")
      }
    }
  )
}
//add a note
export let addNotes  = (req:Request,res:Response)=>{
    let {_id,notes} = req.body;
    console.log(req.body);
    
    let note = Notes.updateOne(
      {
        _id: _id
      },
      {
        '$push':{
          {"notes" : {$each:notes}}
         
         
        }
      });

    // note.save((err:any)=>{
    //   if(err){
    //     res.send(err);
    //   }
    //   else{
    //     res.send(note)
    //   }
    // })
}




//GET/link : return notes of that url

//post insert a new note

//delete a note

//put update a note


// router.post('/create',async(req:Request,res:Response) => {
//     let uuid:string;
//     do
//     {
//         uuid = generateUUID();
//     }while(false);
//   //create an entry in the database with the uuid
//     const notesGenerate = Notes.build({uuid});
//     console.log(notesGenerate);
//     await notesGenerate.save();
//     return res.status(201).send(notesGenerate);
    
// });



// router.post('/:uuid', async(req,res)=>{
//     const {uuid,email,notes} = req.body;
//   //  console.log(req.url);
//   //  console.log(email);
//     // notes.forEach(item => {
//     //     console.log(item.header);
//     //     console.log(item.body);
//     // });
//     // if( _id ){ //_id present
//     //     Notes.save({_id,uuid,email,notes});
//     // }

//    // const notesUpdate = Notes.build({uuid,email,notes});
//     console.log(notesUpdate);
//     await notesUpdate.save()
    
//     return res.end("Updated")
// })

// export {router}
