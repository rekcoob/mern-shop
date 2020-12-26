import { Router } from 'express';
import {
	loginUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
} from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.route('/').post(registerUser);
// router.get('/', getProducts);
router.post('/login', loginUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

export default router;
