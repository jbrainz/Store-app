import express from 'express'
import {
  fetchProductById,
  fetchproducts,
} from '../controllers/product-controller.js'
const router = express.Router()

//@route GET /api/products
router.route('/').get(fetchproducts)

//@route GET /api/products/"id"
router.route('/:id').get(fetchProductById)

export default router
