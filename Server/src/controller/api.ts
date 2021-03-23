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

