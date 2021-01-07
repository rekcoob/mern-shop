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
exports.updateUser = exports.getUserById = exports.deleteUser = exports.getUsers = exports.updateUserProfile = exports.getUserProfile = exports.registerUser = exports.loginUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const loginUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModel_1.default.findOne({ email: email });
    if (user && (yield user.matchPassword(password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken_1.default(user._id),
        });
    }
    else {
        res.status(401);
        throw new Error('Invalid Credentials');
    }
}));
exports.loginUser = loginUser;
const registerUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const userExists = yield userModel_1.default.findOne({ email: email });
    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists');
    }
    const user = yield userModel_1.default.create({
        name: name,
        email,
        password,
    });
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken_1.default(user._id),
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid User Data');
    }
}));
exports.registerUser = registerUser;
const getUserProfile = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }
    else {
        res.status(404);
        throw new Error('User not found');
    }
}));
exports.getUserProfile = getUserProfile;
const updateUserProfile = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = yield user.save();
        res.json({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken_1.default(updatedUser._id),
        });
    }
    else {
        res.status(404);
        throw new Error('User not found');
    }
}));
exports.updateUserProfile = updateUserProfile;
const getUsers = express_async_handler_1.default((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find({}).select('-password');
    res.json(users);
}));
exports.getUsers = getUsers;
const deleteUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.params.id);
    if (user) {
        yield user.remove();
        res.json({ message: 'User removed' });
    }
    else {
        res.status(404);
        throw new Error('User not found');
    }
}));
exports.deleteUser = deleteUser;
const getUserById = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.params.id).select('-password');
    if (user) {
        res.json(user);
    }
    else {
        res.status(404);
        throw new Error('User not found');
    }
}));
exports.getUserById = getUserById;
const updateUser = express_async_handler_1.default((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin =
            req.body.isAdmin == undefined ? user.isAdmin : req.body.isAdmin;
        const updatedUser = yield user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        });
    }
    else {
        res.status(404);
        throw new Error('User not found');
    }
}));
exports.updateUser = updateUser;
//# sourceMappingURL=userController.js.map