import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch All Products
// @route Get /api/products
// @access Public

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

// @desc Fetch Single Product
// @route Get /api/products/:id
// @access Public

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await products.find(req.params.id)
    
    if(product) {
        res.json(product) 
    } else {
        res.status(404)
       
    }
    
}))

export default router