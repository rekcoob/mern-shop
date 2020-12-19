import express from 'express';
import dotenv from 'dotenv';
import products from './data/products';

dotenv.config();

const app = express();

app.get('/', (_, res) => {
	res.send('API is running...');
});
app.get('/api/products', (_, res) => {
	res.json(products);
});
app.get('/api/product/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
	console.log(`Server started on http://localhost:${PORT}`);
});
