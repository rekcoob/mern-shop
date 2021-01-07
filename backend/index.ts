import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

connectDB();

const app = express();
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Allows to accept JSON data in the body
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (_, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
);

const dirname = path.resolve();
// make uploads folder static
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/uploads', express.static(path.join(dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(dirname, '/frontend/build')));

	app.get('*', (_, res) =>
		res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (_, res) => {
		res.send('API is running...');
	});
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
	console.log(`Server started on http://localhost:${PORT}`);
});
