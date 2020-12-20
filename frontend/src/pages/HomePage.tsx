import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Product } from '../components/Product';
import { listProducts } from '../store/actions/productActions';
import { RootState } from '../store/types/rootTypes';
import { IProduct } from '../store/types/productTypes';

export const HomePage: React.FC = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state: RootState) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h3>{error}</h3>
			) : (
				<Row>
					{products.map((product: IProduct) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};
