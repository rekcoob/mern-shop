"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const authMiddleware_js_1 = require("../middleware/authMiddleware.js");
const router = express_1.Router();
router.route('/').get(productController_1.getProducts).post(authMiddleware_js_1.protect, authMiddleware_js_1.admin, productController_1.createProduct);
router.route('/:id/reviews').post(authMiddleware_js_1.protect, productController_1.createProductReview);
router.get('/top', productController_1.getTopProducts);
router
    .route('/:id')
    .get(productController_1.getProductById)
    .delete(authMiddleware_js_1.protect, authMiddleware_js_1.admin, productController_1.deleteProduct)
    .put(authMiddleware_js_1.protect, authMiddleware_js_1.admin, productController_1.updateProduct);
exports.default = router;
//# sourceMappingURL=productRoutes.js.map