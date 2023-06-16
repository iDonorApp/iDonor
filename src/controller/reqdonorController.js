const dbpool = require('../config/database');
const orderModel = require('../models/reqdonorModel');

const checkRs = async (rumah_sakit) => {
  try {
    // Mengecek apakah data rumah sakit dengan nama yang sama sudah ada dalam database
    const [existingRows] = await dbpool.execute('SELECT rumah_sakit FROM RS WHERE rumah_sakit = ?', [rumah_sakit]);
    return existingRows.length > 0 ? existingRows[0].rumah_sakit : rumah_sakit;
  } catch (error) {
    console.error('Error checking existing data:', error);
    throw new Error('Server error');
  }
};

const userRequest = async (req, res) => {

  const { body } = req;

  if (!body.nama || !body.umur || !body.golongan || !body.no_kamar || !body.no_whatsapp) {
    return res.status(400).json({ message: 'Lengkapi Data Anda', data: null });
  }

  try {
    let rumah_sakit = body.rumah_sakit;

    if (rumah_sakit) {
      rumah_sakit = await checkRs(rumah_sakit);
    }

    // Menyimpan data ke database menggunakan model
    await orderModel.createNewRequest({ ...body, rumah_sakit}, req.IDusers);
    res.status(201).json({ message: 'Success', data: { ...body, rumah_sakit } });
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

    return res.status(200).json({ message: 'Success', data: rows[0] });
  } catch (error) {
    console.error('Error retrieving data:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { userRequest, getRequestById };
