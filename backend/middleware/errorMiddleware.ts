import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const error = new Error(`URL ${req.originalUrl} Not Found`);
	res.status(404);
	next(error);
};

const errorHandler = (
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	// if error has 200 status code make it 500
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

export { notFound, errorHandler };
