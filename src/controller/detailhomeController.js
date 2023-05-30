const homeModel = require('../models/detailhomeModel');

const getview = async (req,res)=>{
    try {
        const [data] = await homeModel.getviewall();
        res.json({
            message : 'All User',
            data : data
        })

   
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage : error,
        })
    }
}

const getViewSpesific = async (req, res) => {
    const { rumahsakit } = req.params;
    try {
      const [data] = await homeModel.getViewSpesific(rumahsakit);
  
      if (data.length === 0) {
        return res.status(404).json({ message: 'No requests found for the given rumah_sakit' });
      }
  
      if (!data) {
        return res.status(400).json({ message: 'Data Tidak Ada' });
      }
  
      res.json({
        message: 'All User',
        data: data
      });
  
    } catch (error) {
      res.status(500).json({
        message: 'server error',
        serverMessage: error,
      });
    }
  };
  

// const getRequestsByRumahSakit = async (req, res) => {
//     const { rumahSakit } = req.params;
  
//     try {
//       const [rows] = await orderModel.getRequestsByRumahSakit(rumahSakit);
  
//       if (rows.length === 0) {
//         return res.status(404).json({ message: 'No requests found for the given rumah_sakit' });
//       }
  
//       res.status(200).json({ message: 'Success', data: rows });
//     } catch (error) {
//       console.error('Error retrieving data:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };



module.exports = { getViewSpesific ,getview};