"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopProducts = exports.createProductReview = exports.updateProduct = exports.createProduct = exports.deleteProduct = exports.getProductById = exports.getProducts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const productModel_1 = __importDefault(require("../models/productModel"));
const getProducts = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageSize = 8;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
        ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            },
        }
        : {};
    const count = yield productModel_1.default.countDocuments(Object.assign({}, keyword));
    const products = yield productModel_1.default.find(Object.assign({}, keyword))
        .limit(pageSize)
        .skip(pageSize * (page - 1));
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
}));
exports.getProducts = getProducts;
const getProductById = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productModel_1.default.findById(req.params.id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}));
exports.getProductById = getProductById;
const deleteProduct = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productModel_1.default.findById(req.params.id);
    if (product) {
        yield product.remove();
        res.json({ message: 'Product removed' });
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}));
exports.deleteProduct = deleteProduct;
const createProduct = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new productModel_1.default({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    });
    const createdProduct = yield product.save();
    res.status(201).json(createdProduct);
}));
exports.createProduct = createProduct;
const updateProduct = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, description, image, brand, category, countInStock, } = req.body;
    const product = yield productModel_1.default.findById(req.params.id);
    if (product) {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        const updatedProduct = yield product.save();
        res.json(updatedProduct);
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}));
exports.updateProduct = updateProduct;
const createProductReview = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rating, comment } = req.body;
    const product = yield productModel_1.default.findById(req.params.id);
    if (product) {
        const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString());
        if (alreadyReviewed) {
            res.status(400);
            throw new Error('Product already reviewed');
        }
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
                product.reviews.length;
        yield product.save();
        res.status(201).json({ message: 'Review added' });
    }
    else {
        res.status(404);
        throw new Error('Product not found');
    }
}));
exports.createProductReview = createProductReview;
const getTopProducts = express_async_handler_1.default((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel_1.default.find({}).sort({ rating: -1 }).limit(3);
    res.json(products);
}));
exports.getTopProducts = getTopProducts;
//# sourceMappingURL=productController.js.map