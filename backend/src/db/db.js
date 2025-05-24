const mongoose = require('mongoose')

const connectDB =  async ()=>{
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGO_URI}`)
        
        console.log(`DB conect ${connectionDB.connection.host}`);
        
        
    } catch (error) {
        console.log(`the err in connefction DB ${error}`);
    }
}

module.exports = connectDB;