const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.json({ Error: 'token is not okay' });
            } else {
                req.nama = decoded.nama;
                next();
            }
        });
    }
};

module.exports = { verifyUser };
