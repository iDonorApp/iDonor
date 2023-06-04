const profileModel = require('../models/profileModel');
const moment = require('moment');


const getUserById = async (req, res) => {
  const { iduser } = req.params;

  try {
    const [data] = await profileModel.getUserById(iduser);
    let modifiedData = data;
    if (modifiedData && modifiedData.tanggal_lahir) {
      const date = new Date(modifiedData.tanggal_lahir);
      const dateOnly = date.toISOString().split("T")[0];
      modifiedData = { ...data, tanggal_lahir: dateOnly };
    }
    res.json({
      message: 'GET profile by id Success',
      data: modifiedData,
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
    const existingProfile = await profileModel.updateProfile(body, iduser);

    if (!existingProfile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Merge existing profile data with updated fields from the request body
    const updatedProfile = { ...existingProfile, ...body };

    // Check if all required properties have valid values
    if (!updatedProfile.nama || !updatedProfile.golongan || !updatedProfile.jenis_kelamin) {
      return res.status(400).json({ message: 'Invalid request. Missing required fields' });
    }

    // Check if the password field exists and update the password if it does
    if (body.password) {
      // Generate a salt to be used for hashing
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);

      // Hash the new password
      const hashedPassword = await bcrypt.hash(body.password, salt);

      // Update the password in the updated profile
      updatedProfile.password = hashedPassword;
    }

    await profileModel.updateProfile(updatedProfile, iduser);

    res.status(200).json({
      message: 'Profile updated successfully',
      data: updatedProfile,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', serverMessage: error.message });
  }
};



module.exports = {
  getUserById,
  updateUserProfile
};