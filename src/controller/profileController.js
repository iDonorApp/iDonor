const profileModel = require('../models/profileModel');

const getUserById = async (req, res) => {
    const {iduser} = req.params;
   
    try {
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

const updateUserProfile = async (req, res) => {
    const { iduser } = req.params;
    const {body}  = req;
  
    try {
      await profileModel.updateProfile(body, iduser);
      res.status(201).json({
        message: 'Profile updated successfully',
        data: {
          id: iduser,
          ...body
        }
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
        serverMessage: error
      });
    }
  };
module.exports = {
    getUserById,
    updateUserProfile
};