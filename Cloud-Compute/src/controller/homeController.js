const homeModel = require("../models/homeModel");

const getAllRequest = async (req, res) => {
  try {
    const [data] = await homeModel.getAllRequest();
    const [link] = await homeModel.getAllLink();

    const result = data.map((row) => {
      const rumah_sakit = row.rumah_sakit;
      const dibutuhkan = row.dibutuhkan;
      const searchIndex = link.findIndex(
        (item) => item.rumah_sakit === row.rumah_sakit
      );
      if (searchIndex !== -1) {
        let alamat = link[searchIndex].alamat;
        let imageUrl = link[searchIndex].photos;

        return {
          rumah_sakit : rumah_sakit,
          dibutuhkan: dibutuhkan,
          alamat: alamat,
          imageUrl: imageUrl,
        };
      } else {
        return {
          rumah_sakit : rumah_sakit,
          dibutuhkan: dibutuhkan,
          alamat: null,
          imageUrl: null,
        };
      }
    });

    res.json({
      message: "All Request",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const getSearch = async (req, res) => {
  const { search } = req.params;
  try {
    const [query] = await homeModel.getSearch(search);
    const [link] = await homeModel.getAllLink();

    const result = query.map((row) => {
      const rumah_sakit = row.rumah_sakit;
      const dibutuhkan = row.dibutuhkan;
      const searchIndex = link.findIndex(
        (item) => item.rumah_sakit === row.rumah_sakit
      );
      if (searchIndex !== -1) {
        let alamat = link[searchIndex].alamat;
        let imageUrl = link[searchIndex].photos;
      
        return {
          rumah_sakit : rumah_sakit,
          dibutuhkan: dibutuhkan,
          alamat: alamat,
          imageUrl: imageUrl,
        };
      } else {
        return {
          rumah_sakit : rumah_sakit,
          dibutuhkan: dibutuhkan,
          alamat: null,
          imageUrl: null,
        };
      }
    });

    res.json({
      message: "All Request",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllRequest , getSearch};
