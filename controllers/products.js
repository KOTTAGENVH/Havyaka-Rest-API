const Product = require("../models/mantra")

const getProduct = async (req, res) => {
    try {

        // query's
        const limit = Number(req.query.limit) || 5;
        const sort = req.query.sort;
        const feilds = req.query.feilds;

        let data = Product.find({}).limit(limit);
        
        if(sort){
            const sortList = sort.split(',').join(" ")
            data = data.sort(sortList);
        }else{
            data = data.sort("number");
        }
        if (feilds) {
          const feildsList = feilds.split(",").join(" ");
          data = data.select(feildsList);
        }

        const mantras = await data
        return res
          .status(200)
          .json({ mantras, docNum: mantras.length, success: true });
    } catch (error) {
        console.log(error);
        return res.status(400).json({"message":"Un-Excepted Error Encountered!!",success:false})
    }
    
}


module.exports = { getProduct };

