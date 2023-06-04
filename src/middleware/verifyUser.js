const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    console.log('Token:', token)
    if (!token) {
        return res.json({ Error: 'Token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log('Token verification error:', err);
            return res.json({ Error: 'Invalid token' });
        }

        req.nama = decoded.nama;
        next();
    });
};

module.exports = { verifyUser };
