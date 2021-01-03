import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Message } from '../components/Message';
import { Loader } from '../components/Loader';
import {
	listProducts,
	deleteProduct,
	createProduct,
} from '../store/actions/productActions';
import { PRODUCT_CREATE_RESET } from '../store/types/productTypes';
import { RootState } from '../store/types/rootTypes';

export const ProductListPage: React.FC = () => {
	const { id: userId } = useParams<{ id: string }>();
	const history = useHistory();
	const dispatch = useDispatch();

	const productList = useSelector((state: RootState) => state.productList);
	const { loading, error, products } = productList;

	const productDelete = useSelector((state: RootState) => state.productDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = productDelete;

	const productCreate = useSelector((state: RootState) => state.productCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		product: createdProduct,
	} = productCreate;

	const userAuth = useSelector((state: RootState) => state.userAuth);
	const { userInfo } = userAuth;

	useEffect(() => {
		dispatch({ type: PRODUCT_CREATE_RESET });
		if (!userInfo || !userInfo.isAdmin) {
			history.push('/login');
		}
		if (successCreate) {
			history.push(`/admin/product/${createdProduct._id}/edit`);
		} else {
			dispatch(listProducts());
		}
	}, [
		dispatch,
		history,
		userInfo,
		successDelete,
		successCreate,
		createdProduct,
	]);

	const handleDelete = (id: string) => {
		if (window.confirm('Are you sure')) {
			dispatch(deleteProduct(id));
		}
	};

	const handleCreateProduct = () => {
		dispatch(createProduct());
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
			{loadingDelete || (loadingCreate && <Loader />)}
			{errorDelete && <Message variant="danger">{errorDelete}</Message>}
			{errorCreate && <Message variant="danger">{errorCreate}</Message>}
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
