const profileModel = require('../models/profileModel');

const getUserById = async (req, res) => {
    try {
        const iduser = req.params.iduser;
        const [data] = await profileModel.getUserById(iduser);

        res.json({
            message: 'GET profile by id Success',
            data: data,
        });
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        });
    }
};

module.exports = {
    getUserById,
};