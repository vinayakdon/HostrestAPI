const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "please enter the number"]
    },
    createon : {
        type : Date,
        default : Date.now()
    },
    company : {
        type: String,
        enum : {
            values : ["Nike", "Adidas", "Puma"],
            message : "{VALUE} is not a valid brand"
        }
    }

})


module.exports = mongoose.model("Product", productSchema);