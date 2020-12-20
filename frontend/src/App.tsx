import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<main className="py-3">
				<Container>
					<Route exact path="/" component={HomePage} />
					<Route path="/product/:id" component={ProductPage} />
					<Route path="/cart/:id?" component={CartPage} />
				</Container>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
