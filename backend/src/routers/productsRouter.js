const express = require("express")
const router = express.Router()
const productsController = require("../controllers/productsController")
router.get("/products", productsController.getAllData )
router.post("/products", productsController.postData )
router.get("/products/:id", productsController.getDataById )
router.delete("/products/:id", productsController.deleteDataById )
router.patch("/products/:id", productsController.patchDataById )
router.put("/products/:id", productsController.putDataById )





module.exports = router