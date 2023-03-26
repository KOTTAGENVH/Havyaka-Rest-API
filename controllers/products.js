const Product = require("../models/mantra")

const getProduct = async (req, res) => {
    const data = await Product.find(req.query).sort("name")
    console.log(data);
    res.status(200).json({data,docNum:data.length})
}
const getProductTest = async (req, res) => {
    const data = await Product.find(req.query)
    res.status(200).json({msg:"Test Message to you buddy"})
}

module.exports = { getProduct, getProductTest };

