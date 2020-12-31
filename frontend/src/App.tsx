import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { ShippingPage } from './pages/ShippingPage';
import { PaymentMethodPage } from './pages/PaymentMethodPage';
import { PlaceOrderPage } from './pages/PlaceOrderPage';
import { OrderPage } from './pages/OrderPage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/order/:id">
						<OrderPage />
					</Route>
					<Route path="/shipping">
						<ShippingPage />
					</Route>
					<Route path="/payment">
						<PaymentMethodPage />
					</Route>
					<Route path="/placeorder">
						<PlaceOrderPage />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/register">
						<RegisterPage />
					</Route>
					<Route path="/profile">
						<ProfilePage />
					</Route>
					<Route path="/product/:id">
						<ProductPage />
					</Route>
					<Route path="/cart/:id?">
						<CartPage />
					</Route>
					<Route exact path="/">
						<HomePage />
					</Route>
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
