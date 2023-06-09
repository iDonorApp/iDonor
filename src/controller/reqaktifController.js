const reqaktifModel = require('../models/reqaktifModel');

const getViewAktifRequest = async (req, res) => {
    const IDusers = req.IDusers;
  
    try {
      const [data] = await reqaktifModel.getViewAktifRequest(IDusers);
  
      res.json({
        message: 'Request donor',
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

  const deleteAkifRequest = async (req, res) => {
    const { id_request } = req.params;
    const IDusers = req.IDusers;
  
    try {
      const result = await reqaktifModel.deleteAkifRequest(id_request, IDusers);
      
      if (result[0].affectedRows === 0) {
        return res.status(403).json({
          message: 'Access Denied'
        });
      }
      
      res.json({
        message: 'Delete Request Success'
      });
    } catch (error) {
      console.error('Error deleting request:', error);
      res.status(500).json({
        message: 'Server error',
        serverMessage: error
      });
    }
  };

module.exports = { getViewAktifRequest, deleteAkifRequest};
