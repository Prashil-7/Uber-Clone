const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')
const  connectDB  = require('./db/db')
const {register} = require('./routes/user.route')


const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hekllo")
})

app.use('/api/v1/users',register);


module.exports = app;