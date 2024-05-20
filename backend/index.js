const express = require("express")
require("dotenv/config")
var bodyParser = require('body-parser')
var cors = require('cors')
const PORT = process.env.PORT
const app = express()

const routes = require("./src/routers/productsRouter")
app.use(bodyParser.json())
app.use(cors())

app.use("/api", routes)
require("./src/config/db")


app.listen(PORT, () => {
    console.log("Server is connected");
	
})