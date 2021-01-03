import express from 'express';
import path from 'path';
import multer from 'multer';
import { admin, protect } from '../middleware/authMiddleware';

const router = express.Router();

const storage = multer.diskStorage({
	// cb= callback
	destination(_req, _file, cb) {
		// cb(null, '/tmp/my-uploads')
		cb(null, 'uploads/');
	},
	filename(_req, file, cb) {
		// cb(null, file.fieldname + '-' + Date.now()
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
		);
	},
});

function checkFileType(
	file: Express.Multer.File,
	// cb: (error: Error | null, filename: string) => void
	cb: any
) {
	const filetypes = /jpg|jpeg|png/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);

	if (extname && mimetype) {
		return cb(null, true);
	} else {
		cb('Images only!');
	}
}

const upload = multer({
	storage,
	fileFilter: function (_req, file, cb) {
		checkFileType(file, cb);
	},
});

router.post('/', protect, admin, upload.single('image'), (req, res) => {
	res.send(`/${req.file.path}`);
});

export default router;
