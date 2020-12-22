import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken';
import User from '../models/userModel';

/**
 * @desc    Login user & get token
 * @route   POST /api/users/login
 * @access  Public
 */
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email: email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid Credentials');
	}
});

export { loginUser };
