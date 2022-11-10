const Product = require("../Models/Product");
const { Op } = require("sequelize");

exports.getProducts = async (req, res, next) => {
  try {
    let whereObject = {};
    let limit = parseInt(req.query.limit)
    if (req.query.name) {
      whereObject = {
          name: {
            [Op.like]: `%${req.query.name}%`,
          },
      };
    }
    const p1 = await Product.findAll({where : whereObject, limit :limit })
    if (!p1) {
      return res.status(404).json({
        success: false,
        data: {
          error: "No data",
        },
      });
    }
    res.status(200).json({
      success: true,
      len: p1.length,
      data: {
        p1,
      },
    });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({
      success: false,
      data: {
        error: err.message,
      },
    });
  }
};
