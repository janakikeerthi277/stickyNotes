import mongoose from 'mongoose';



interface INotes{
    uuid: string,
    email?: string,
    notes?: {header:string,body:string}[]
}

interface todoModelInterface extends mongoose.Model<NotesDoc> {
    build(attr:INotes):NotesDoc;
}

interface NotesDoc extends mongoose.Document {
    uuid: string,
    email?: string,
    notes?: {header:string,body:string}[]
}

const notesSchema  = new mongoose.Schema({
    uuid:{
        type:String,
        unique: true,
        required: true
    },
    email:{
        type:String,
    },
    notes:[{header:String, body:String}]

})


notesSchema.statics.build = (attr:INotes)=>{
    return new Notes(attr);
}
const Notes = mongoose.model<any,todoModelInterface>('Notes',notesSchema);

// Notes.build({
//     uuid : "asfnasgnas",
//     email:"janaki@gmail.com",
//     notes: [
//         {
//             header : "Hello World",
//             body : "hi my name is janaki"
//         },
//         {
//             header : "Hello ",
//             body : "hi testing two"
//         }
//     ]
// })

export {Notes};

