const express = require('express')
require("dotenv").config();
const connectDB = require('./config/db')
const noteRoutes = require('./routes/noteRoutes')
connectDB();
const app = express();

const cors = require('cors');
app.use(cors());


app.use(express.json());

app.use('/api/notes',noteRoutes)

const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`Server running on on port ${PORT}`)
})