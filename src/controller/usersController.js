const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/usersModel');
const uuidRandom = require('uuid-random');
const salt = 15;

const register = async (req, res) => {
    const { body } = req;
    try {
        const hash = await bcrypt.hash(body.password.toString(), salt);
        const uuid = uuidRandom().replace(/\D/g, '').substring(0, 16);
        const values = [
            uuid, // Gunakan nilai UUID yang sudah berupa angka
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
        return res.status(201).json({ message: 'Success', data: body });
    } catch (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ message: 'Error in server' });
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
            const id_users= user.id_users;
            const token = jwt.sign({ id_users }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ 
                Status: 'Success',
                id : id_users,
                token : token 
            });
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
