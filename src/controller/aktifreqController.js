const aktifreqModel = require('../models/aktifreqModel');

const getViewAktifRequest= async (req, res) => {
    const { id_user } = req.params;
  
    try {
        const [data] = await aktifreqModel.getViewAktifRequest(id_user);
        
        const nopassword = data.map((item) => {
            const { password, ...datanopassword } = item;
            return datanopassword;
        });
  
        res.json({
            message: 'GET profile by id Success',
            data: nopassword,
        });
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        });
    }
  };

  module.exports = { getViewAktifRequest};