"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const errorMiddleware_1 = require("./middleware/errorMiddleware");
const db_1 = __importDefault(require("./config/db"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const orderRoutes_js_1 = __importDefault(require("./routes/orderRoutes.js"));
const uploadRoutes_js_1 = __importDefault(require("./routes/uploadRoutes.js"));
dotenv_1.default.config();
db_1.default();
const app = express_1.default();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
app.use(express_1.default.json());
app.use('/api/products', productRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use('/api/orders', orderRoutes_js_1.default);
app.use('/api/upload', uploadRoutes_js_1.default);
app.get('/api/config/paypal', (_, res) => res.send(process.env.PAYPAL_CLIENT_ID));
const dirname = path_1.default.resolve();
app.use('/uploads', express_1.default.static(path_1.default.join(dirname, '/uploads')));
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(dirname, '/frontend/build')));
    app.get('*', (_, res) => res.sendFile(path_1.default.resolve(dirname, 'frontend', 'build', 'index.html')));
}
else {
    app.get('/', (_, res) => {
        res.send('API is running...');
    });
}
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`Server started on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map