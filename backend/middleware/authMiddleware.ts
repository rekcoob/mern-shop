import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { IRequestWithUser, IRequestWithUserOrNull } from '../types/index.js';

const protect = asyncHandler(async (req: IRequestWithUserOrNull, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
				id: string;
			};

			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized, token is incorrect');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});

const admin = (req: IRequestWithUser, res: Response, next: NextFunction) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized as an admin');
	}
};

export { protect, admin };
