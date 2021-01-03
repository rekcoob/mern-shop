import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from '../components/Message';
import { Loader } from '../components/Loader';
import { listProducts } from '../store/actions/productActions';
import { RootState } from '../store/types/rootTypes';

export const ProductListPage: React.FC = () => {
	const { id: userId } = useParams<{ id: string }>();
	const history = useHistory();
	const dispatch = useDispatch();

	const productList = useSelector((state: RootState) => state.productList);
	const { loading, error, products } = productList;

	const userAuth = useSelector((state: RootState) => state.userAuth);
	const { userInfo } = userAuth;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listProducts());
		} else {
			history.push('/login');
		}
	}, [dispatch, history, userInfo]);

	const handleDelete = (id: string) => {
		if (window.confirm('Are you sure')) {
			// DELETE PRODUCTS
		}
	};

	const handleCreateProduct = (product: any) => {
		//   CREATE PRODUCT
	};

	return (
		<>
			<Row className="align-items-center">
				<Col>
					<h1>Products</h1>
				</Col>
				<Col className="text-right">
					<Button className="my-3" onClick={handleCreateProduct}>
						<i className="fas fa-plus"></i> Create Product
					</Button>
				</Col>
			</Row>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>PRICE</th>
							<th>CATEGORY</th>
							<th>BRAND</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product._id}>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>${product.price}</td>
								<td>{product.category}</td>
								<td>{product.brand}</td>
								<td>
									<LinkContainer to={`/admin/product/${product._id}/edit`}>
										<Button variant="light" className="btn-sm">
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>
									<Button
										variant="danger"
										className="btn-sm"
										onClick={() => handleDelete(product._id)}
									>
										<i className="fas fa-trash"></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};