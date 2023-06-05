const reqaktifModel = require('../models/reqaktifModel');

const getViewAktifRequest= async (req, res) => {
    const { id} = req.params;
  
    try {
        const [data] = await reqaktifModel.getViewAktifRequest(id);
  
        res.json({
            message: 'Request donor ',
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

  module.exports = { getViewAktifRequest};
