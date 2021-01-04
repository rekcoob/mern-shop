import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Product } from '../components/Product';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import { listProducts } from '../store/actions/productActions';
import { RootState } from '../store/types/rootTypes';
import { IProduct } from '../store/types/productTypes';

export const HomePage: React.FC = () => {
	const { keyword } = useParams<{ keyword: string }>();
	const dispatch = useDispatch();
	const productList = useSelector((state: RootState) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword));
	}, [dispatch, keyword]);

	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
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
