const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/usersModel');
const { v4: uuidv4 } = require('uuid');
const salt = 15;
const dotenv = require('dotenv');
dotenv.config();

const register = (req, res) => {
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: 'Error for hashing password' });
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
        userModel.createUser(values, (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                return res.json({ Error: 'Inserting data error in server' });
            }
            return res.json({ Status: 'Success' });
        });
    });
};

const login = (req, res) => {
    userModel.getUserByEmail(req.body.email, (err, data) => {
        if (err) return res.json({ error: 'Login error in server' });
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) return res.json({ Error: 'Password compare error' });
                if (response) {
                    const nama = data[0].nama;
                    const token = jwt.sign({ nama }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: `1d` });
                    res.cookie('token', token);
                    return res.json({ Status: 'Success' });
                } else {
                    return res.json({ Error: 'Wrong Email or Password' });
                }
            });
        } else {
            return res.json({ Error: 'Wrong Email or Password' });
        }
    });
};

module.exports = { register, login };
