const homeModel = require('../models/homeModel');

const getAllRequest = async (req, res) => {
    try {
      const [data] = await homeModel.getAllRequest();
      const [link] = await homeModel.getAllLink();
      
      const result = data.map((row) => {
        const searchIndex = link.findIndex((item) => item.rumah_sakit === row.rumah_sakit);
        if (searchIndex !== -1) {
          let alamat = link[searchIndex].alamat;
          let imageUrl = null;
          
          try {
            const imageUrlString = link[searchIndex].photos;
            imageUrl = JSON.parse(imageUrlString)[0];
          } catch (error) {
            console.log('Error parsing image URL:', error);
          }
    
          return {
            'Rumah Sakit': row.rumah_sakit,
            Dibutuhkan: row.Dibutuhkan,
            alamat: alamat,
            'Image URL': imageUrl
          };
        } else {
          return {
            'Rumah Sakit': row.rumah_sakit,
            Dibutuhkan: row.Dibutuhkan,
            alamat: null,
            'Image URL': null
          };
        }
      });
    
      res.json({
        message: 'All Request',
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
        serverMessage: error,
      });
    }
  };
  

module.exports = { getAllRequest};