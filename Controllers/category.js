const Category = require("../Models/Category")
const Product = require("../Models/Product")
const sq = require("../Db/conn")
const {Op} = require("sequelize")

exports.getCategory = async(req, res, next) => {
    try {
        const c1 = await Category.findAll()
        if(!c1){
            return res.status(404).json({
                success : false, 
                data : {
                    error : 'No data'
                }
            })
        }
        res.status(200).json({
            success : true, 
            len : c1.length,
            data : {
                c1
            }
        })
    } catch (err) {
        console.log(err.stack)
       res.status(500).json({
        success : false, 
        data : {
            error : err.message
        }
       }) 
    }
}

exports.getProductByCategory = async(req, res,next) => {
    try {
        let whereObject = {
            where : {category : req.params.id}
        }
        if(req.query.name){
            whereObject  = {
                where : {
                    category : req.params.id,
                   name : {
                    [Op.like] : `%${req.query.name}%`}
                }
            }}
        const p1 = await Product.findAll(whereObject, orderBy)
        if(!p1){
            return res.status(404).json({
                success : false, 
                data : {
                    error : 'No data'
                }
            })
        }
        res.status(200).json({
            success : true, 
            len : p1.length, 
            data : {
                p1
            }
        })
    } catch (err) {
       console.log(err.stack) 
       res.status(500).json({
        success : false, 
        data : {
            error : err.message
        }
       })
    }
}
