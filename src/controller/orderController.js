const orderModel = require('../models/orderModel');

const userRequest = async (req, res) => {
    const { body } = req;

    if (!body.rumah_sakit || !body.nama || !body.umur || !body.golongan || !body.no_kamar || !body.no_whatsapp) {
        return res.status(400).json({ message: 'Lengkapi Data Anda', data: null });
    }

    try {
        // Menyimpan data ke database menggunakan model
        await orderModel.createNewRequest(body);
        res.status(201).json({ message: 'Success', data: body });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getRequestById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await orderModel.getRequestById(id);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Request not found' });
        }

        res.status(200).json({ message: 'Success', data: rows[0] });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { userRequest, getRequestById };
