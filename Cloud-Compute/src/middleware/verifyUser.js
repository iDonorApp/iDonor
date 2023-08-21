const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log('Token:', token);
        if (!token) {
            return res.json({ Error: 'Token is missing' });
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log('Token verification error:', err);
                return res.json({ Error: 'Invalid token' });
            }

            req.IDusers = decoded.id_users;
            next();
        });
    } catch (err) {
        console.error('Error verifying user:', err);
        res.status(500).json({ Error: 'Error verifying user' });
    }
};

module.exports = { verifyUser };
