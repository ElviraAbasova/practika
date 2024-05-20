const mongoose = require("mongoose") 
require("dotenv/config")
const Mongoose = process.env.Mongoose

mongoose
	.connect(Mongoose)
	.then(() => {
		console.log("connected");
	}).catch(err=> console.log(err))