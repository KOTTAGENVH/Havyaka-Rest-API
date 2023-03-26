const express = require("express");
const router = express.Router()
const {getProduct,getProductTest} = require("../controllers/products")

router.route('/').get(getProduct)
router.route('/test').get(getProductTest)

module.exports = router;