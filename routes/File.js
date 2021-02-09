const express = require('express');
const { uploadAvatar, uploadFiles } = require('../middleware/upload');

const router = express.Router();

// upload image for avatar
router.post('/upload/avatar', uploadAvatar.single('avatar'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json('Please upload a file.')
    }
    const hostname = process.env.PORT ? req.hostname : `${req.hostname}:5000`
    res.json({ avatar: `${req.protocol}://${hostname}/${file.path}` })
})

// upload files for attachment
router.post('upload/files', uploadFiles.array('files', 3), (res, req) => {

})

module.exports = router;