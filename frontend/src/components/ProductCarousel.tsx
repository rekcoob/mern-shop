import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Image } from 'react-bootstrap';
// import { Loader } from './Loader';
import { Message } from './Message';
import { listTopProducts } from '../store/actions/productActions';
import { RootState } from '../store/types/rootTypes';

export const ProductCarousel: React.FC = () => {
	const dispatch = useDispatch();

	const productTopRated = useSelector(
		(state: RootState) => state.productTopRated
	);
	// const { loading, error, products } = productTopRated;
	const { error, products } = productTopRated;

	useEffect(() => {
		dispatch(listTopProducts());
	}, [dispatch]);

	// return loading ? (
	// 	<Loader />
	// ) :
	return error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<Carousel pause="hover" className="bg-dark">
			{products.map((product) => (
				<Carousel.Item key={product._id}>
					<Link to={`/product/${product._id}`}>
						<Image src={product.image} alt={product.name} fluid />
						<Carousel.Caption className="carousel-caption">
							<h2>
								{product.name} ({product.price})
							</h2>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	);
};
