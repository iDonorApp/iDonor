const dbpool = require('../config/database');
const axios = require('axios');

const getLinkPlaceAPI = async (req, res, next) => {
    try {
      const { body } = req;
      const rumahsakit = body.rumah_sakit;
      const API_KEY = process.env.API_KEY; // Ganti dengan API key dari Google Maps
  
      // Mengirim permintaan ke API Maps untuk mendapatkan data rumah sakit berdasarkan nama
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(rumahsakit)}&inputtype=textquery&fields=photos,formatted_address,place_id&key=${API_KEY}`);
  
      const data = response.data;
      if (data.status === 'OK' && data.candidates.length > 0) {
        const photos = data.candidates[0].photos;
        const address = data.candidates[0].formatted_address;
        const placeId = data.candidates[0].place_id;
        const urlplaceID = `https://maps.google.com/maps/place/?q=place_id:${placeId}`
        const cleanedAddress = address
          .split(',')
          .slice(0, 5)
          .join(',')
          .trim();
  
        const photoLinks = photos.map(photo => {
          const photoReference = photo.photo_reference;
          return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${API_KEY}`;
        });
  
        // Mengecek apakah data rumah sakit dengan alamat yang sama sudah ada dalam database
        const [existingRows] = await dbpool.execute('SELECT * FROM RS WHERE rumah_sakit = ?', rumahsakit);//[cleanedAddress]);
        if (existingRows.length > 0) {
          next();
        }
        else {
          // Menyimpan data foto, nama, alamat, dan link Google Maps ke dalam database MySQL
          await dbpool.execute('INSERT INTO RS (rumah_sakit, photos, alamat, gmaps_link) VALUES (?, ?, ?, ?)', [rumahsakit, JSON.stringify(photoLinks), cleanedAddress, urlplaceID]);
  
          // Mengirim data foto (berupa tautan), alamat yang sudah dibersihkan, nama, dan link Google Maps sebagai respons API
          req.rumahSakitData = {
            photos: photoLinks,
            address: cleanedAddress,
            name: rumahsakit,
            gmaps_link: urlplaceID
          };
          next();
        }
      } else {
        req.rumahSakitData = {
          photos: [],
          address: '',
          gmaps_link: ''
        };
        next();
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
module.exports = { getLinkPlaceAPI };
