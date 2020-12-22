import { Router } from 'express';
import { loginUser } from '../controllers/userController';

const router = Router();

// router.get('/', getProducts);
router.post('/login', loginUser);

export default router;
