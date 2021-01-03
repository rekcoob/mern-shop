import { Router } from 'express';
import {
	getProducts,
	getProductById,
	deleteProduct,
} from '../controllers/productController';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = Router();

// router.get('/', getProducts);
router.route('/').get(getProducts);

router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router;
