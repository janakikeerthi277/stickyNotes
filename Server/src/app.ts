import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hi Sou/JK, we are up. Up is up is afa Please start you work');
});
app.listen(port,  () => {
  return console.log(`server is listening on ${port}`);
});