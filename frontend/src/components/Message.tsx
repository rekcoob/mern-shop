import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
	variant?: string;
	children: any;
};

export const Message: React.FC<Props> = ({ variant = 'info', children }) => {
	return <Alert variant={variant}>{children}</Alert>;
};
