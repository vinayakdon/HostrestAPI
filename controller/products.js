const Products = require("../models/products")
const getAllProducts = async(req,res)=>{
    const { company, name, price, select, sort } = req.query;
    const queryObject = {

    }
    if(company){
        queryObject.company = company
    }

    if(price){
        queryObject.price = price
    }

    if(name){
        queryObject.name = new RegExp(name, 'i')
    }

    let apidata = Products.find(queryObject)

    if(sort){
        let sortFix = sort.split(",").join(" ");
        apidata = apidata.sort(sortFix)

    }

    if(select){
        let selectFix = select.split(",").join(" ");
        apidata = apidata.select(selectFix);
    }

    let page = req.query.page || 1;
    let limit = req.query.limit;

    let skip = (page - 1)*limit
    apidata = apidata.skip(skip).limit(limit)

    const getdata = await apidata;
    res.send(getdata);
}

const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({
        message : "get all the products for testing"
    })
}


module.exports = { getAllProducts, getAllProductsTesting}