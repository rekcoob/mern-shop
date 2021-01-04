import { Request } from 'express';

export interface IUser {
	_id: string;
	name: string;
	email: string;
	password: string;
	isAdmin?: boolean;
}

export interface IRequestWithUser extends Request {
	user?: IUser;
}
export interface IRequestWithUserOrNull extends Request {
	user?: Omit<IUser, '_id'> | null;
}

export interface IProduct {
	user: IUser;
	name: string;
	image: string;
	brand: string;
	category: string;
	description: string;
	reviews: IProductReview[];
	rating: number;
	numReviews: number;
	price: number;
	countInStock: number;
}

export interface IProductReview {
	name: string;
	rating: number;
	comment: string;
	user: string;
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
