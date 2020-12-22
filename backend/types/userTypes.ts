import { Request } from 'express';

export interface IUser {
	_id?: string;
	name: string;
	email: string;
	password: string;
	isAdmin?: boolean;
}

export interface IRequestWithUser extends Request {
	user?: IUser | null;
}
