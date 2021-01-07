"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination(_req, _file, cb) {
        cb(null, 'uploads/');
    },
    filename(_req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path_1.default.extname(file.originalname)}`);
    },
});
function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/;
    const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
    else {
        cb('Images only!');
    }
}
const upload = multer_1.default({
    storage,
    fileFilter: function (_req, file, cb) {
        checkFileType(file, cb);
    },
});
router.post('/', authMiddleware_1.protect, authMiddleware_1.admin, upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
});
exports.default = router;
//# sourceMappingURL=uploadRoutes.js.map