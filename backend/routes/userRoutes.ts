import { Router } from 'express';
import { loginUser, getUserProfile } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

// router.get('/', getProducts);
router.post('/login', loginUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
