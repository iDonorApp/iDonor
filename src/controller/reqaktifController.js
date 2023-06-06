const reqaktifModel = require('../models/reqaktifModel');

const getViewAktifRequest= async (req, res) => {
    const {id_users} = req.params;
  
    try {
        const [data] = await reqaktifModel.getViewAktifRequest(id_users);
  
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

const deleteAkifRequest = async (req , res ) => {
    const {id_request} = req.params;
    try {
        await reqaktifModel.deleteAkifRequest(id_request);
        res.json ({
            message : 'Delete Request Success'
        })
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({
            message: 'Server error',
            serverMessage: error, });
    }
}

module.exports = { getViewAktifRequest, deleteAkifRequest};