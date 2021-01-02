import { Router } from 'express';
import {
	loginUser,
	registerUser,
	getUserProfile,
	getUsers,
	updateUserProfile,
} from '../controllers/userController';
import { protect, admin } from '../middleware/authMiddleware';

const router = Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
// router.get('/', getProducts);
router.post('/login', loginUser);
router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

export default router;
