import express from 'express';
import {generateUUID} from './generateUUID'

const app = express();
const port = 3000;

// generate uuid and send the response
app.get('/create', (req, res) => {
  let uuid:string;
  do
  {
    uuid = generateUUID();
  }while(false);
  //create an entry in the database with the uuid
  
  res.send(uuid);
});


//update the database with the stickynotes detail



app.listen(port,  () => {
  return console.log(`server is listening on ${port}`);
});