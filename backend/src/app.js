const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')
const  connectDB  = require('./db/db')
const {register,login, profileUser,logout} = require('./routes/user.route')
const {captainRegister,captainLogin,captainProfile,captainLogout} = require('./routes/captain.route')
const cookiesParser = require('cookie-parser') 


const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hekllo")
})

//user routes
app.use('/api/v1/users',register);
app.use('/api/v1/users',login);
app.use('/api/v1/users', profileUser);
app.use('/api/v1/users', logout);


//captain routes
app.use('/api/v1/captain',captainRegister)
app.use('/api/v1/captain',captainLogin)
app.use('/api/v1/captain',captainProfile)
app.use('/api/v1/captain',captainLogout)


module.exports = app;