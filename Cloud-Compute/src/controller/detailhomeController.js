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

    const { gmaps_link } = data[0];

    const  nogmaps = data.map((item) => {
      const { gmaps_link, ...datanogmaps } = item;
      return datanogmaps;
    });

    res.json({
      message: `Request Di ${rumahsakit}`,
      'Gmaps URL': gmaps_link,
      data: nogmaps
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    });
  }
};


  
module.exports = { getViewSpesific ,getview};