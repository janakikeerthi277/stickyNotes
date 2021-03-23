import mongoose from 'mongoose';



export interface INotes extends mongoose.Document{
    uuid: string,
    email?:string,
    notes?: {header:string,body:string}[]
}

export const NoteSchema = new mongoose.Schema({
        uuid:{
        type : String,
        unique: true,
        required: true
    },
    email:{
        type:String,
    },
    notes:[{header:String, body:String}]
})

const Notes = mongoose.model<INotes>("Notes",NoteSchema);

export default Notes;






