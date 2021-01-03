import express from 'express';
import {
	addOrderItems,
	getAllOrders,
	getMyOrders,
	getOrderById,
	updateOrderToPaid,
} from '../controllers/orderController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
	.route('/')
	.post(protect, addOrderItems)
	.get(protect, admin, getAllOrders);
router.route('/myorders').get(protect, getMyOrders);
// :id always on the bottom of routes
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
