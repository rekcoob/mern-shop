// import { Document } from 'mongoose';

export interface IUser {
	name: string;
	email: string;
	password: string;
	isAdmin?: boolean;
}

export interface IProduct {
	user: IUser;
	name: string;
	image: string;
	brand: string;
	category: string;
	description: string;
	reviews: { name: string; rating: number; comment: string };
	rating: number;
	numReviews: number;
	price: number;
	countInStock: number;
}

export interface IOrder {
	user: IUser;
	orderItems: [
		{
			name: string;
			qty: number;
			image: string;
			price: number;
			product: IProduct;
		}
	];
	shippingAddress: {
		address: string;
		city: string;
		postalCode: string;
		country: string;
	};
	paymentMethod: string;
	paymentResult: {
		id: string;
		status: string;
		update_time: string;
		email_address: string;
	};
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	isPaid: boolean;
	paidAt: any;
	isDelivered: boolean;
	deliveredAt: any;
}
