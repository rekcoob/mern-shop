import { Router } from 'express';
import {
	getProducts,
	getProductById,
	deleteProduct,
	updateProduct,
	createProduct,
	createProductReview,
} from '../controllers/productController';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = Router();

// router.get('/', getProducts);
router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);

router
	.route('/:id')
	.get(getProductById)
	.delete(protect, admin, deleteProduct)
	.put(protect, admin, updateProduct);

export default router;
