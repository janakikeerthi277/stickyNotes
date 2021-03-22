import express from 'express';
import {router} from './routes/api'
import mongoose from 'mongoose'
import bodyParser = require('body-parser')

const app = express();
const port = 3000;

//go to mongo create the stickynotes database
mongoose.connect('mongodb://127.0.0.1:27017/stickyNotes',{
  useCreateIndex : true,
  useNewUrlParser : true,
  useUnifiedTopology : true
},()=>{
  console.log('connected to database')
})

// ( async ()=>{

//   try {
//   await mongoose.connect('mongodb://127.0.0.1:27017/stickyNotes', { 
//     useNewUrlParser: true,
//     useCreateIndex : true,
//     useUnifiedTopology : true
//   }).then(
//     ()=>{
//       console.log("Connected to database")
//     }
//   );
// } catch (error) {
//   console.log('Error in db connection')
// }

// });

// const connection = mongoose.connection;
// connection.once("open",function(){
//   console.log("mongoDB database connection established successfully")
// })

// generate uuid and send the response
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(router);



//update the database with the stickynotes detail



app.listen(port,  () => {
  return console.log(`server is listening on ${port}`);
});