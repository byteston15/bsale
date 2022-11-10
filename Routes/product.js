const express = require("express")
const router = express.Router()
const {getProducts} = require("../Controllers/product")

router.route("/products").get(getProducts)


module.exports = router