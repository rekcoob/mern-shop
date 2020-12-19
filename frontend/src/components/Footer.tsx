import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer: React.FC = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className="text-center py-3">Copyright &copy; ProShop</Col>
				</Row>
			</Container>
		</footer>
	);
};
