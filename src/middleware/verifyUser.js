const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: 'Token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ Error: 'Invalid token' });
        }

        req.nama = decoded.nama;
        next();
    });
};

module.exports = { verifyUser };
