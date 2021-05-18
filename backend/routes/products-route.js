import express from 'express'
import {
  createProduct,
  createProductReview,
  deleteProduct,
  fetchProductById,
  fetchproducts,
  updateProduct,
} from '../controllers/product-controller.js'
import { protect, admin } from '../middleware/auth-middleware.js'

const router = express.Router()

//@route GET /api/products
router.route('/').get(fetchproducts).post(protect, admin, createProduct)

//@route GET /api/products/"id"
router
  .route('/:id')
  .get(fetchProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)

export default router
