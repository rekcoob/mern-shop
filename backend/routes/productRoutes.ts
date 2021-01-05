import { Router } from 'express';
import {
	getProducts,
	getProductById,
	deleteProduct,
	updateProduct,
	createProduct,
	createProductReview,
	getTopProducts,
} from '../controllers/productController';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router
	.route('/:id')
	.get(getProductById)
	.delete(protect, admin, deleteProduct)
	.put(protect, admin, updateProduct);

export default router;
