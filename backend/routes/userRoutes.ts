import { Router } from 'express';
import {
	deleteUser,
	loginUser,
	registerUser,
	getUserProfile,
	getUsers,
	updateUserProfile,
	getUserById,
	updateUser,
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
router
	.route('/:id')
	.delete(protect, admin, deleteUser)
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser);

export default router;
