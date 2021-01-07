# React eCommerce Application

Full featured eCommerce with shopping cart, product reviews and ratings, top products carousel, PayPal integration, Admin management and checkout process( shipping, payment method, etc)

## [Live Demo](https://mern-eshop-app.herokuapp.com)

## Tech Stack

- [React](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [Mongo DB](https://www.mongodb.com)

## Getting Started

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
yarn install
cd frontend
yarn install
```

### Compile typescript into javascript

```
yarn watch
```

### Run frontend (:3000) & backend (:5000)

```
yarn dev
```

### Run backend only

```
yarn backend
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
yarn data:import

# Destroy data
yarn data:destroy
```
