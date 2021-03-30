require('dotenv').config()

const notesData = require('./data/dummyNotes');

const connectDB = require('./config/db');

const Notes = require('./models/Notes');

connectDB();

const importData = async()=>{
    try{
        await Notes.deleteMany({});

        await Notes.insertMany(notesData);

        console.log("Data Import Success");

        process.exit()
    }
    catch(err){
        console.log(err)
        console.log("Error withdata import");
        process.exit();
    }
}


importData();