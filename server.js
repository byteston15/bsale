const express = require("express")
const app = express()
const {testConn} = require("./Db/test.js")
const dotenv = require("dotenv")

//Rutas
const r_category = require("./Routes/category")

//Instancias e inicializaciones
dotenv.config({path : './Config/config.env'})
const PORT = process.env.PORT || 8080;

testConn()

app.use(process.env.ROUTE, r_category)



app.listen(PORT,console.log(`Server running on http://localhost:${PORT}${process.env.ROUTE}`))