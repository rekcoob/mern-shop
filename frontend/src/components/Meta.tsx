import React from 'react';
import { Helmet } from 'react-helmet';
type Props = {
	title?: string;
	description?: string;
	keywords?: string;
};

export const Meta: React.FC<Props> = ({
	title = 'Welcome To Eshop',
	description = 'We sell the best products for cheap',
	keywords = 'electronics, buy electronics, cheap electronics',
}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</Helmet>
	);
};
