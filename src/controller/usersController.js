const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/usersModel');
const { v4: uuidv4 } = require('uuid');
const salt = 15;
const dotenv = require('dotenv');
dotenv.config();

const register = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password.toString(), salt);
        const values = [
            uuidv4(),
            req.body.nama,
            req.body.golongan,
            req.body.jenis_kelamin,
            req.body.tanggal_lahir,
            req.body.no_whatsapp,
            req.body.alamat,
            req.body.email,
            hash,
        ];
        await userModel.createUser(values);
        return res.json({ Status: 'Success' });
    } catch (err) {
        console.error('Error inserting data:', err);
        return res.json({ Error: 'Inserting data error in server' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await userModel.getUserByEmail(email);

        if (!data || data.length === 0) {
            console.log('User not found');
            return res.json({ Error: 'Wrong Email or Password' });
        }

        const user = data[0];
        const response = await bcrypt.compare(password.toString(), user.password);

        if (response) {
            const nama = user.nama;
            const token = jwt.sign({ nama }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: 'Success' });
        } else {
            console.log('Incorrect password');
            return res.json({ Error: 'Wrong Email or Password' });
        }
    } catch (err) {
        console.error('Error retrieving user data:', err);
        return res.json({ error: 'Login error in server' });
    }
};

module.exports = { register, login };
