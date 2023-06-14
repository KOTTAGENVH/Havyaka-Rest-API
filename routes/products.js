const express = require("express");
const router = express.Router()
const {getProduct} = require("../controllers/products")

router.route('/').get(getProduct)

module.exports = router;