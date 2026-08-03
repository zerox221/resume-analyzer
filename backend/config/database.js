const mongoose = require('mongoose');

require('dotenv').config();

console.log(process.env.DATABASE_URL);
const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB CONNECTED");
    })
    .catch((error)=>{
        console.log("DB NOT CONNECTED");
        console.log(error);
    })
}

module.exports = connectDB;