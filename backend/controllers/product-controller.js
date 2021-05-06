import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all Products
//@access public
export const fetchproducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc Fetch single Products
//@access public
export const fetchProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404)
    throw new Error('Product Not Found')
  }
  res.json(product)
})
