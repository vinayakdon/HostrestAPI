const express = require("express");
const ProductJson = require("./products.json")

const connectDB = require("./db/connect");
const products = require("./models/products");
require("dotenv").config();



const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        await products.deleteMany();
        await products.create(ProductJson);
        console.log("successfull transfered the data");
    }
    catch(error){
        console.log(error);
    }
}

start()