const profileModel = require('../models/profileModel');
const bcrypt = require('bcrypt');

const getUserById = async (req, res) => {  
  const IDusers = req.IDusers;

  try {
      const [data] = await profileModel.getUserById(IDusers);
      
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

const updateUserProfile = async (req, res) => {
  const IDusers = req.IDusers;
  const { body } = req;

  try {
    // Mendapatkan data pengguna berdasarkan ID
    const [data] = await profileModel.getUserById(IDusers);

    // Memeriksa apakah data pengguna ditemukan
    if (!data) {
      return res.status(404).json({ message: 'Profile tidak ada' });
    }

    // Mengupdate password jika ada password baru yang diberikan
    if (body.password) {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
    }

    // Mengupdate profil pengguna
    await profileModel.updateProfile(body, IDusers);

    const response = {
      message: 'Profile updated successfully',
      data: body,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', serverMessage: error.message });
  }
};


module.exports = {
  getUserById,
  updateUserProfile
};