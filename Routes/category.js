const express = require("express")
const router = express.Router()
const { getCategory, getProductByCategory } =  require("../Controllers/category")


router.route("/category").get(getCategory)
router.route("/category/:id/product").get(getProductByCategory)

module.exports = router