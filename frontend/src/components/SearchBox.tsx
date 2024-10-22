import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export const SearchBox: React.FC = () => {
	const [keyword, setKeyword] = useState('');
	const history = useHistory();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
		setKeyword('');
	};

	return (
		<Form onSubmit={handleSubmit} inline>
			<Form.Control
				type="text"
				name="q"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Search Products..."
				className="mr-sm-2 ml-sm-5"
			></Form.Control>
			<Button type="submit" variant="outline-success" className="p-2">
				Search
			</Button>
		</Form>
	);
};
