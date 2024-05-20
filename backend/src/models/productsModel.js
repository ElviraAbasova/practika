const mongoose = require("mongoose")

const productsSchema= mongoose.Schema({
	title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
	image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
},
{collections: "Product", timestamps:true}
)

module.exports = mongoose.model("Product", productsSchema)