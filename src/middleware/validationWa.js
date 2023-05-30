const validateWaNumber = (req, res, next) => {
    const { body } = req;
    const whatsappNo = body.no_whatsapp;
    
    try {
            // Memeriksa panjang nomor telepon
        if (whatsappNo.length > 14) {
            return res.status(400).json({ message: 'Nomor telepon tidak boleh lebih dari 14 digit' });
        }
        
        // Memeriksa apakah nomor telepon hanya mengandung angka
        if (isNaN(whatsappNo)) {
            return res.status(400).json({ message: 'Nomor telepon harus berupa angka' });
        }

            
        // Memeriksa awalan nomor telepon
        if (!whatsappNo.startsWith('62')) {
            return res.status(400).json({ message: 'Nomor telepon harus diawali dengan 62' });
        }

    } catch (error) {
        console.error('Error inserting data:', error);
        return res.status(500).json({ message: 'server error',
            serverMessage : error, });
    }
    // Lanjut ke middleware selanjutnya
    next();
  };
  
  module.exports = { validateWaNumber };