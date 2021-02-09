const multer = require('multer');
const path = require('path');

const avatarStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `avatar-${req.body.id}${path.extname(file.originalname)}`)
    }
});

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `file-${req.body.id}${path.extname(file.originalname)}`)
    }
});

const uploadAvatar = multer({ storage: avatarStorage });
const uploadFiles = multer({ storage: fileStorage });

module.exports = {
    uploadAvatar: uploadAvatar,
    uploadFiles: uploadFiles
};