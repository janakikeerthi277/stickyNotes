const mongoose = require("mongoose")
const { string } = require("yargs")

const notesSchema = new mongoose.Schema({
    url:{
        type:String
 //       required:true
    },
    email:{
        type:String
 //       required:true
    },
    notes:{
        type:Array
    }
    
});

const Notes = mongoose.model('stickyNotes',notesSchema);

module.exports = Notes;