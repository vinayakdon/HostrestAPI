const mongoose = require("mongoose");
require("dotenv").config();
//const url = "mongodb+srv://vinayakdon25:3AhD4nHgjOGiZeC3@vinayakapi.jditsrh.mongodb.net/vinayakdon25?retryWrites=true&w=majority"

const connectDB = (uri)=>{
    return mongoose.connect(uri).then(()=>{
        console.log("db is connected");
    })
}


module.exports = connectDB