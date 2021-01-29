const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) return res.status(401).send('Access Denied.')
    next();
}

module.exports = auth;