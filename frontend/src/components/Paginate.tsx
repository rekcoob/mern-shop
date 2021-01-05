import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

type Props = {
	pages: number;
	page: number;
	isAdmin?: boolean;
	keyword?: string;
};

export const Paginate: React.FC<Props> = ({
	pages,
	page,
	isAdmin = false,
	keyword = '',
}) => {
	return (
		<>
			{pages > 1 && (
				<Pagination className="d-flex justify-content-center">
					{
						// map through Array pages times
						[...Array(pages).keys()].map((x) => (
							<LinkContainer
								key={x + 1}
								to={
									!isAdmin
										? keyword
											? `/search/${keyword}/page/${x + 1}`
											: `/page/${x + 1}`
										: `/admin/productlist/${x + 1}`
								}
							>
								<Pagination.Item active={x + 1 === page}>
									{x + 1}
								</Pagination.Item>
							</LinkContainer>
						))
					}
				</Pagination>
			)}
		</>
	);
};
