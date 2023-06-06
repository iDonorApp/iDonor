const profileModel = require('../models/profileModel');

const getUserById = async (req, res) => {
  const { iduser } = req.params;

  try {
      const [data] = await profileModel.getUserById(iduser);
      
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



const bcrypt = require('bcrypt');

const updateUserProfile = async (req, res) => {
  const { iduser } = req.params;
  const { body } = req;

  try {
    // Mendapatkan data pengguna berdasarkan ID
    const [data] = await profileModel.getUserById(iduser);

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
    await profileModel.updateProfile(body, iduser);

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