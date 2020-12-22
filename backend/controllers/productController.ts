import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

/**
 * @desc    Fetch all products
 * @route   GET /api/products
 * @access  Public
 */
const getProducts = asyncHandler(async (_, res) => {
	const products = await Product.find({});
	// throw new Error('Some error');

	res.json(products);
});

/**
 * @desc    Fetch single product
 * @route   GET /api/products/:id
 * @access  Public
 */
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	console.log(product);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

export { getProducts, getProductById };