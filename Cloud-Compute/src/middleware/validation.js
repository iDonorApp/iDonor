const dbpool = require('../config/database');

const validateData = async(req, res, next) => {
    const { nama, umur, golongan, no_whatsapp, email, password } = req.body;
    try {
        // Validation Nama tidak ada angka dan simbol
         // Validation Nama tidak ada angka dan simbol
      if (nama) {
        if (nama.match(/\d/)) {
          return res.status(400).json({ message: 'Nama tidak boleh mengandung angka' });
        } else if (/[^\w\s]/.test(nama)) {
          return res.status(400).json({ message: 'Nama tidak boleh mengandung simbol' });
        }
      }

       // Validation umur tidak boleh input angka
      if (umur){
        if (isNaN(umur)) {
          return res.status(400).json({ message: 'Umur harus berupa angka' });
        } else if (/[^\w\s]/.test(umur)) {
          return res.status(400).json({ message: 'Umur tidak boleh mengandung simbol' });
        } else if (umur > 120) {
          return res.status(400).json({ message: 'Umur maksimal adalah 120 tahun' });
        } else if (umur.length > 3) {
          return res.status(400).json({ message: 'Umur tidak boleh lebih dari 3 karakter' });
        }
      }
      // Validation golongan tidak lebih dari 3 karakter dan harus Input berupa A, B, O, atau AB
      if (golongan) {
        if (golongan.length > 3) {
          return res.status(400).json({ message: 'Golongan tidak boleh lebih dari 3 karakter' });
        } else if (golongan !== 'A' && golongan !== 'B' && golongan !== 'O' && golongan !== 'AB') {
          return res.status(400).json({ message: 'Golongan harus A, B, O, atau AB' });
        }
      }

      // Validation nomor telephone/whatsapp (!>14 digit, berupa angka, diawali dengan 62, minimal 11 digit)
      if (no_whatsapp) {
        if (no_whatsapp.length > 14) {
          return res.status(400).json({ message: 'Nomor telepon tidak boleh lebih dari 14 digit' });
        } else if (isNaN(no_whatsapp)) {
          return res.status(400).json({ message: 'Nomor telepon harus berupa angka' });
        } else if (!no_whatsapp.startsWith('62')) {
          return res.status(400).json({ message: 'Nomor telepon harus diawali dengan 62' });
        } else if (no_whatsapp.length < 12) {
          return res.status(400).json({ message: 'Nomor telepon harus memiliki minimal 11 digit' });
        }
      }

      if (email) {
        // Validation email yang tidak sesuai
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({ message: 'Email tidak valid' });
        }

        // Validation email mengecek email apakah sudah ada atau belum
        const cekdata = await dbpool.execute('SELECT email FROM users WHERE email = ?', [email]);
        if (cekdata[0].length > 0) {
          return res.status(400).json({ message: 'Email Sudah Ada' });
        }
      }

      if (password) {
        // Validation password
        if (password.length < 8) {
          return res.status(400).json({ message: 'Password minimal 8 karakter' });
        }
      }
  
        
    } catch (error) {
        console.error('Error inserting data:', error);
        return res.status(500).json({ message: 'server error',
            serverMessage : error, });
    }
    // Lanjut ke middleware selanjutnya
    next();
  };

module.exports = { validateData};