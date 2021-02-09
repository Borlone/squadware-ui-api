const express = require('express');
const { uploadAvatar, uploadFiles } = require('../middleware/upload');

const router = express.Router();

const hostname = process.env.PORT || 'localhost:5000';

// upload image for avatar
router.post('/upload/avatar', uploadAvatar.single('avatar'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json('Please upload a file.')
    }
    const avatarPath = `${req.protocol}://${hostname}/${file.path}`
    res.json({ avatar: avatarPath })
})

// upload files for attachment
router.post('upload/files', uploadFiles.array('files', 3), (res, req) => {

})

module.exports = router;