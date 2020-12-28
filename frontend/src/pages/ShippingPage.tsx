import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer } from '../components/FormContainer';
import { CheckoutSteps } from '../components/CheckoutSteps';
import { saveShippingAddress } from '../store/actions/cartActions';
import { RootState } from '../store/types/rootTypes';

export const ShippingPage: React.FC = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const { shippingAddress } = cart;

	const [address, setAddress] = useState<string>(shippingAddress.address);
	const [city, setCity] = useState<string>(shippingAddress.city);
	const [postalCode, setPostalCode] = useState<string>(
		shippingAddress.postalCode
	);
	const [country, setCountry] = useState<string>(shippingAddress.country);

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		history.push('/payment');
	};

	return (
		<FormContainer>
			<CheckoutSteps step1 step2 />
			<h1>Shipping</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="city">
					<Form.Label>City</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter city"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="postalCode">
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter postal code"
						value={postalCode}
						onChange={(e) => setPostalCode(e.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="country">
					<Form.Label>Country</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}
						required
					></Form.Control>
				</Form.Group>
				<Button type="submit" variant="primary">
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};
