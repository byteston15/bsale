const sq = require("../Db/conn")
const {DataTypes} = require("sequelize")
const Product = require("./Product")

const Category =  sq.define("category", {
    id : {
        type : DataTypes.INTEGER(3),
        autoIncrement : true, 
        primaryKey : true,
    },
    name : {
        type : DataTypes.STRING(150),
        validate : {
            len : {
                args : [3, 150],
                msg : 'El nombre de la categoría debe tener entre 3 y 150 caracteres'
            }
        },
        allowNull : false,
        set(val){
            this.setDataValue("name", val.toUpperCase())
        }
    },
    
}, {freezeTableName : false , timestamps : false})


Category.hasMany(Product, {
    foreignKey : {
        name : 'category'
    },
    as :"fk_category"
})

Product.belongsTo(Category, {
    foreignKey : {
        name : 'category'
    },
    as : 'fk_category'
})


module.exports = Category