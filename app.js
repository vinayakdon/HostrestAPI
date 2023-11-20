const express = require("express");
const app = express();
const ProductRouts = require("./router/products")
const connectDB = require("./db/connect")
require("dotenv").config();


app.get("/", (req,res)=>{
    res.send("hello guys");
})

app.use("/api/users", ProductRouts);

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        app.listen(3000,()=>{
            console.log("server is connected connected");
        })

    }
    catch(error){
        console.log(error)
    }
}

start();