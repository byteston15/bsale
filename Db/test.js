const colors = require("colors")
const sq = require("./conn")

exports.testConn = async() => {
    try {
        sq.authenticate()
        console.log("Database connection succesfully".green)
    } catch (err) {
       console.log(err.message.underline.red) 
    }
}