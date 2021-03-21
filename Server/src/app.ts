import express from 'express';
import {generateUUID} from './generateUUID'

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  let uuid:string = generateUUID();
  res.send(uuid);
});
app.listen(port,  () => {
  return console.log(`server is listening on ${port}`);
});