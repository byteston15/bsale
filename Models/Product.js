const sq = require("../Db/conn")
const {DataTypes} = require("sequelize")


const Product = sq.define("product", {
    id : {
        type : DataTypes.INTEGER(9),
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING(150),
        validate : {
            len: {
                args : [3, 150],
                msg : 'El nombre debe tener entre 3 y 150 caracteres'
            }
        },
        allowNull : false
    }, 
    url_image : {
        type : DataTypes.STRING(300),
        defaultValue : 'Public/Images/DefaultImage.jpg',
        allowNull : true
    },
    price : {
        type : DataTypes.INTEGER(9),
        allowNull : false, 
    },
    discount : {
        type : DataTypes.INTEGER(2),
        allowNull : true,
        defaultValue : 0,
    }
}, {freezeTableName : true, timestamps : false})

module.exports = Product